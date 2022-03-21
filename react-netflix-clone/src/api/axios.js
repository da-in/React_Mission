import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "2caa71e054ea6f0a4450c3ac1ab6e63c",
    language: "ko-KR",
  },
});

export default instance;
