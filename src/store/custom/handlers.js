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
        isLoadingGetCharacters: true
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
    console.log('payloadInStatusHandlers', payload);
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

export const changeFilterCategoryStatus = (state, { payload }) => {
    console.log('payloadInCategory', payload)
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


// function filteredByStatus(characterCards, status) {
//     let cards = new Map();
//     for (let card of characterCards) {
//         if (!cards.has(card.status)) {
//             cards.set(card.status, [card]);
//         } else cards.get(card.status).push(card);
//     }
//     const arrForStatus = Array.from(cards);
//     console.log("arrForStatus", arrForStatus);
//     return {...state,
//         characterCards: arrForStatus,
//     };
// }


// export const getSelectedCharacters = (state, { payloud }) => {
//     if (state.filterState.status) {
//         filteredByStatus(state.characterCards, status)
//     }
//     return {...state,

//     };
// }


export default initialState;