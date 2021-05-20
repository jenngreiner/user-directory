import axios from "axios";
const URL = "https://randomuser.me/api/?results=15&nat=us";
// eslint-disable-next-line
export default {
  search: function () {
    return axios.get(URL);
  },
};
