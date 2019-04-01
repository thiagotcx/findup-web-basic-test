import axios from "axios";
import { getToken } from "../config";

const api = axios.create({
    baseURL: "http://api-server.local/api"
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers.common["Content-Type"] = "application/json";
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;