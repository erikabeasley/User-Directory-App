import axios from "axios";

export default {
  // Grabs the users from our API via Axios
  getUsers: function() {

    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};