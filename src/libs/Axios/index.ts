import axios from "axios";

const instance = axios.create({
  baseURL: process.env.APP_BASE_API,
});

export default instance;
