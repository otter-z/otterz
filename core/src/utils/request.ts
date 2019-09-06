import axios, { AxiosResponse } from 'axios';
import https from 'https';

const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
});

export const getPageHtml: (url: string) => Promise<string> = async (
  url: string
): Promise<string> => {
  const result = await instance.get<string>(url);
  if (result.status < 400) return result.data;
  else return '';
};
