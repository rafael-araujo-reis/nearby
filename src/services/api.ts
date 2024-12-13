import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.1.5:3333",
    timeout: 7000
});

export { api };