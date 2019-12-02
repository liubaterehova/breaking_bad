import { handleActions, createActions } from "redux-actions";

import initialState, * as handlers from "./handlers.jsx";

export const actions = createActions({
    GET_ALL_CHARACTERS: undefined,
    GET_ALL_CHARACTERS_SUCCESS: undefined,
    PROCESS_FAILURE: undefined
});

const customReducer = handleActions(
    new Map([
        [actions.processFailure, handlers.processFailure],
        [actions.getAllCharacters, handlers.getAllCharacters],
        [actions.getAllCharactersSuccess, handlers.getAllCharactersSuccess]
    ]),
    initialState
);

// export default customReducer;