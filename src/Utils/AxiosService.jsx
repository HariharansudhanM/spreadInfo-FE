import axios from "axios";

const axiosService = axios.create({
  baseURL: "https://worldwiseblog.onrender.com",
  headers: { "Content-Type": "application/json" },
});

export default axiosService;
