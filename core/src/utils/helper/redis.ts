import redis  from 'ioredis';
import Config from '../../config';
export const Redis = new redis(Config.REDIS_CONNECTION);


