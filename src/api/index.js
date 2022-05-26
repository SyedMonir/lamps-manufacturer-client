import axios from 'axios';

export const fetcher = axios.create({
  // baseURL: 'https://lamps-manufacturer.herokuapp.com/',
  baseURL: 'http://localhost:5000/',
  // headers: {
  //   'Content-type': 'application/json',
  //   authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  // },
});
