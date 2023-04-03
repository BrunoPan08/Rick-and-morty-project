import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://rickandmortyapi.com/api/"
});

export default blogFetch;