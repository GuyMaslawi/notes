import axios from "axios";

export const API_SERVER_URL = "http://localhost:5000";

const config = {
    baseURL: API_SERVER_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
};

const api = axios.create(config);

export default api;
