import axios, { AxiosResponse } from 'axios';
import https from 'https';

const agent = new https.Agent({
  rejectUnauthorized: false
});

const instance = axios.create({
  httpsAgent: agent
});

export const getPageHtml: (url: string) => Promise<string> = async (
  url: string
): Promise<string> => {
  const result = await instance.get<string>(url, { httpsAgent: agent });
  if (result.status < 400) {
    return result.data;
  } else {
    return '';
  }
};
