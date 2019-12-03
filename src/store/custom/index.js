import { handleActions, createActions } from "redux-actions";

import initialState, * as handlers from "./handlers.js";

export const actions = createActions({
    GET_ALL_CHARACTERS: undefined,
    GET_ALL_CHARACTERS_SUCCESS: undefined,
    CHANGE_FILTER_STATE_STATUS: undefined,
    CHANGE_FILTER_CATEGORY_STATUS: undefined,
    PROCESS_FAILURE: undefined
});

const customReducer = handleActions(
    new Map([
        [actions.processFailure, handlers.processFailure],
        [actions.getAllCharacters, handlers.getAllCharacters],
        [actions.getAllCharactersSuccess, handlers.getAllCharactersSuccess],
        [actions.changeFilterStateStatus, handlers.changeFilterStateStatus],
        [actions.changeFilterCategoryStatus, handlers.changeFilterCategoryStatus],

    ]),
    initialState
);

export default customReducer;