import {Dashboard} from "../Models/Dashboard";
import {Details} from "../Models/Details";
import axios, { AxiosResponse } from 'axios';

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    })
}

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody)
}

const Dashboards = {
    list: () => axios.get<Dashboard[]>('/dashboards.json')
        .then(responseBody),
    details: (id: string) => requests.get<Details>(`/${id}.json`),
}

const agent = {
    Dashboards
}

export default agent;