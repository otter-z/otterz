import { toPairs, pipe, fromPairs, map } from 'ramda';
import { stringify } from 'querystring';

interface IConfig {
  REDIS_CONNECTION: string;
  CHANNEL_URL: string;
  CHANNEL_PARSE: string;
  CHANNEL_DATA: string;
}

const defaultConfig: IConfig = {
  REDIS_CONNECTION: 'redis://127.0.0.1:6379',
  CHANNEL_URL: 'URL',
  CHANNEL_PARSE: 'PARSE',
  CHANNEL_DATA: 'DATA'
};

const Config: IConfig = Object.entries(defaultConfig).reduce(
  (config: any, [key, value]) => ({
    ...config,
    [key]: process.env[key] || value
  }),
  {}
);

export default Config;
