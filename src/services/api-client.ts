import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "01eccc255ff14d839d3733429905bd9a",
  },
});
