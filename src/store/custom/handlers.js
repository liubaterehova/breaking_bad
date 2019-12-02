const initialState = {
    isLoadingGetCharacters = false,
    characterCards: [],
    filterState: {
        status: "",
        category: "",
        ageFrom: 0,
        ageTo: 100
    },
    error: ""
};

export const processFailure = (state, { payload }) => state;

export const getAllCharacters = (state, { payload }) => {
    return {
        ...state,
        isLoadingGetCharacters: true,
    };
};

export const getAllCharactersSuccess = (state, { payload }) => {
    return {
        ...state,
        isLoadingGetCharacters: false,
        characterCards: payload,
    }
};


export default initialState;