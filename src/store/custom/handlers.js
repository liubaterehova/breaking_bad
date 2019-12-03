const initialState = {
    isLoadingGetCharacters: false,
    characterCards: [{
        avatar: "",
        name: "",
        birthday: null,
        status: "",
        category: ""
    }],
    filterState: {
        status: "",
        category: "",
        ageFrom: 0,
        ageTo: 100
    },
    error: "",
};

export const processFailure = (state, { payload }) => state;

export const getAllCharacters = (state, { payload }) => {
    return {
        ...state,
        isLoadingGetCharacters: true,
    };
};

export const getAllCharactersSuccess = (state, { payload }) => {
    console.log("payloadInGetCharactersSuccess", payload);
    return {
        ...state,
        isLoadingGetCharacters: false,
        characterCards: payload.characterCards
    };
};

export const changeFilterStateStatus = (state, { payload }) => {

    if (payload.key === '10') {
        return {
            ...state,
            filterState: {
                ...state.filterState,
                status: payload.allCategories
            }
        }
    }
    return {
        ...state,
        filterState: {
            ...state.filterState,
            status: payload.key,
        }
    };
};
export const changeFromAge = (state, { payload }) => {
    console.log('agePayload', payload)
    return {
        ...state,
        filterState: {
            ...state.filterState,
            ageFrom: payload,
        }
    }
}
export const changeFilterCategoryStatus = (state, { payload }) => {

    if (payload.key === '10') {
        return {
            ...state,
            filterState: {
                ...state.filterState,
                category: payload.allCategories
            }
        }
    };
    return {
        ...state,
        filterState: {
            ...state.filterState,
            category: payload.key,
        }
    };
};




export default initialState;