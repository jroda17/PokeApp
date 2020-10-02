import axios from "axios";

export const AxiosDefault = axios.create({
  headers: {'Content-Type': 'application/json', 'Cache-Control': 'no-cache'},
  timeout: 10000,
  baseURL: 'https://pokeapi.co/api/v2/'
});