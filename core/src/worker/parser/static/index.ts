import { Job } from "bull";
import StaticBrowser from "../../../utils/browser/static";
import { getQueue } from "../../../utils/helper/queue";
import Config from "../../../config";
interface ITask {
  url: string;
  deep: number;
}

interface IData {
  projectId: string;
  task: ITask;
}

const scrapQueue = getQueue("scrap");

export default async (job: Job): Promise<boolean> => {
  const data: IData = job.data;
  const browser = new StaticBrowser();
  await browser.goto(data.task.url)
  const URLS = browser.scrapAttribut("a", "href");

  console.log(
    `level ${data.task.deep} - ${data.task.url} - found ${URLS.length} URLS `
  );

  await scrapQueue.add(Config.CHANNEL_URL, {
    projectId: data.projectId,
    task: { deep: data.task.deep, foundURLs: URLS },
  });

  return true;
};
