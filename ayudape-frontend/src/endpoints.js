import axios from 'axios';

axios.interceptors.response.use(
  response => response,
  async error => console.log("error:", error)
);

const baseUrl = axios.create({ baseURL: `${"https://cors-anywhere.herokuapp.com/"}http://ec2-13-58-30-211.us-east-2.compute.amazonaws.com:8080` });

export const sendMessage = (message) =>
    baseUrl.post(
        "/ask-question",
        { text: message },
        { headers: { "Content-Type": "application/json" } }
    );