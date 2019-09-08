import Bull from 'bull';
import { Request } from '../../../utils';
import StaticParser from './parser';
import { getQueue } from '../../../utils/queue';
import Config from '../../../config';
interface ITask {
  url: string;
  deep: number;
}

interface IData {
  projectId: string;
  task: ITask;
}

const scrapQueue = getQueue('scrap');

export default async (job: Bull.Job): Promise<boolean> => {
  const data: IData = job.data;
  const html = await Request.getPageHtml(data.task.url);
  const parser = new StaticParser(html);
  const URLS = parser.getAttrs('a', 'href');

  console.log(
    `level ${data.task.deep} - ${data.task.url} - found ${URLS.length} URLS `
  );

  await scrapQueue.add(Config.CHANNEL_URL, {
    projectId: data.projectId,
    task: { deep: data.task.deep, foundURLs: URLS }
  });

  return true;
};
