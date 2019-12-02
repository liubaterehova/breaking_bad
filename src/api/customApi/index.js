import { BASE_BREAKING_BAD_URL } from "../index";

import axios from "axios";

const http = axios.create();

const makeCustomApi = ({ client, headersManager }) => ({
    getAllCharacters: async() => {
        return await http.get(`${BASE_BREAKING_BAD_URL}`);
    }
});

export default makeCustomApi;