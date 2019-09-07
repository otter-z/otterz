import Queue from 'bull';
import Config from '../config';

const queueCache: { [key: string]: any } = {};

export const getQueue = (name: string) => {
  console.log(`queue cache : `, Object.keys(queueCache));
  if (!queueCache[name]) {
    queueCache[name] = new Queue(name, Config.REDIS_CONNECTION);
  }
  return queueCache[name];
};
