import axios from "axios";

export const ENDPOINT = "https://64b3e7ab0efb99d862688405.mockapi.io/pcshop/";

export const request = axios.create({
  baseURL: ENDPOINT,
  timeout: 10000,
});
