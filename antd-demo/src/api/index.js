import makeCustomApi from "./customApi";

export const BASE_BREAKING_BAD_URL =
    "https://breakingbadapi.com/api/characters";

export const makeApi = (dependencies = {}) => ({
    custom: makeCustomApi(dependencies)
});

export default makeApi;