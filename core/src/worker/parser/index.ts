import { Redis } from '../../utils';
import { Request } from '../../utils';
import { Job } from 'bull';
import cheerio from 'cheerio';
import { AxiosResponse } from 'axios';

interface IJobData {
  pId: string;
  payload: IPayload;
}

interface IPayload {
  url: string;
}

export default async (job: Job) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { pId, payload }: IJobData = job.data;

      const project = await Redis.get(pId);

      const pageHTML: AxiosResponse<string> = await Request.Get(payload.url);

      const page = cheerio.load(pageHTML.data);
      let listOfLinks = page('a')
        .map(function(i, el) {
          return cheerio(el).attr('href');
        })
        .toArray();
    } catch (e) {
      reject(e);
    }
  });
};
