import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-ai-discvrai.vercel.app/api", // change after deploy
});

export default API;
