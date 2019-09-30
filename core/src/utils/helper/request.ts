import axios from "axios";
import https from "https";

export interface IResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  request?: any;
}

const agent = new https.Agent({
  rejectUnauthorized: false,
});

export const instance = axios.create({
  httpsAgent: agent,
});

export const GET: (url: string) => Promise<IResponse<string>> = 
(url: string) : Promise<IResponse<string>> => instance.get<string>(url);
