import redis from '../../utils/redis';
import { Job } from 'bull';
import Config from '../../config';
import { getQueue } from '../../utils/queue';

interface ITask {
  data: any;
}

interface IData {
  projectId: string;
  task: ITask;
}

export default async (job: Job): Promise<boolean> => {
  const data: IData = job.data;

  redis.lpush(data.projectId, data.task.data);

  return true;
};
