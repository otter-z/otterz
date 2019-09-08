import dotenv from 'dotenv';
dotenv.config();

import { getQueue } from './utils/queue';
import path from 'path';

const scrapQueue = getQueue('scrap');

scrapQueue.process(
  'PARSE',
  1,
  path.resolve(__dirname, './worker/parser/static-parser/index.js')
);

scrapQueue.process('URL', 1, path.resolve(__dirname, './worker/url/index.js'));

scrapQueue.add('PARSE', {
  projectId: 1,
  task: {
    url: 'https://wikipedia.org',
    deep: 1
  }
});
