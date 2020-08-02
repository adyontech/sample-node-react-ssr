import config from "../config";
import axios from "axios";

export const neptuneInstance = axios.create({
  baseURL: config.neptuneBaseUrl,
  headers: config.neptuneHeaders,
});
