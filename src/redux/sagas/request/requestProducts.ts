import axios from "axios";
import { baseURL } from "../../../types";

export function requestGetProducts() {
  return axios.request({
    method: "get",
    url: `${baseURL}/products`,
  });
}
