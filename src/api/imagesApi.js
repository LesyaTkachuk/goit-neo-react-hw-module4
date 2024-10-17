import axios from "axios";
import { BASE_URL, ACCESS_KEY, VERSION } from "./constnts";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Authorization"] = `Client-ID ${ACCESS_KEY}`;
axios.defaults.headers.common["Accept-Version"] = VERSION;

export const fetchImages = async (page = 1, per_page = 20) => {
  const response = await axios.get("photos", {
    params: {
      page,
      per_page,
      orientation: "landscape",
    },
  });
  return response.data;
};

export const fetchImagesByQuery = async (query, page = 1, per_page = 20) => {
  const response = await axios.get(`search/photos`, {
    params: {
      query,
      page,
      per_page,
      orientation: "landscape",
    },
  });

  return response.data;
};
