import axios, { AxiosResponse } from 'axios';
import https from 'https';

const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
});

export const Get: (url: string) => Promise<AxiosResponse<string>> = (
  url: string
) => instance.get<string>(url);
