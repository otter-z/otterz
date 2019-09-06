import Redis from 'ioredis';
import Config from '../config';
const redis = new Redis(Config.REDIS_CONNECTION);

export default redis;
