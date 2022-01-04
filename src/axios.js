import axios from "axios";
// https://api.themoviedb.org/3/movie/550?api_key=ad5bec185ac3569fb4b480776b92c5bb
//Base URL to get the movies data
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
})
export default instance;