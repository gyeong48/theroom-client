import axios from "axios";

const host = "http://localhost:8080"
const baseUrl = `${host}/api/content`
axios.defaults.withCredentials = true;

export const getContents = async (type) => {
    const res = await axios.get(`${baseUrl}/${type}`);
    return res.data;
}