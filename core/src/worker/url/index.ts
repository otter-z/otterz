import { Job } from 'bull';
import NormalizeURL from 'normalize-url';
import Config from '../../config';
import { getQueue } from '../../utils/helper/queue';

interface ITask {
  foundURLs: string[];
  deep: number;
}

interface IData {
  projectId: string;
  task: ITask;
}

const scrapQueue = getQueue('scrap');
const i = 0;

export default async (job: Job): Promise<boolean> => {
  const data: IData = job.data;

  if (data.task.foundURLs && data.task.deep < 2) {
    data.task.foundURLs.forEach(url => {
      console.log(`add url to queue : ${url}`);
      scrapQueue.add(Config.CHANNEL_PARSE, {
        projectId: data.projectId,
        task: {
          url: NormalizeURL(url),
          deep: data.task.deep + 1
        }
      });
    });
  }

  return true;
};
