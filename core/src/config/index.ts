import { toPairs, pipe, fromPairs, map } from 'ramda';
import { stringify } from 'querystring';

interface IConfig {
  REDIS_CONNECTION: string;
  QUEUE_PROJECTS: string;
  QUEUE_PARSE: string;
}

const defaultConfig: IConfig = {
  REDIS_CONNECTION: 'redis://127.0.0.1:6379',
  QUEUE_PROJECTS: 'PROJECTS',
  QUEUE_PARSE: 'PROJECTS'
};

const Config: IConfig = Object.entries(defaultConfig).reduce(
  (config: any, [key, value]) => ({
    ...config,
    [key]: process.env[key] || value
  }),
  {}
);

export default Config;
