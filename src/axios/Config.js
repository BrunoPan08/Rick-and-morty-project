// eslint-disable-next-line import/no-unresolved
import axios from "axios";

// mudar nome da const
const blogFetch = axios.create({
    baseURL: "https://rickandmortyapi.com/api/"
});

export default blogFetch;