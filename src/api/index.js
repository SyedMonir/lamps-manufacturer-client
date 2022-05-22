import axios from 'axios';

export const fetcher = axios.create({
  baseURL: 'https://some-domain.com/api/',
  headers: { 'X-Custom-Header': 'foobar' },
});
