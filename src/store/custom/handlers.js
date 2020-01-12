const SORT_NO = 0;
const SORT_STRAIGHT = 1;
const SORT_REVERSE = -1;

const initialState = {
    isLoadingGetCharacters: false,
    characterCards: [{
        avatar: "",
        name: "",
        age: null,
        status: "",
        category: ""
    }],
    filterState: {
        status: "",
        category: "",
        minAge: 0,
        maxAge: 100
    },
    error: "",
    sort: SORT_NO
};

const initFilterState = {
    status: "",
    category: "",
    minAge: 0,
    maxAge: 100
};

export const processFailure = (state, { payload }) => state;

const makeAgeFromData = data => {
    if (data === "Unknown") return "Unknown";
    let arr = data.split("-");
    let nowYear = new Date().getFullYear();
    let age = nowYear - arr[2];
    return age;
};

export const getAllCharacters = (state, { payload }) => {
    return {
        ...state,
        isLoadingGetCharacters: true
    };
};

export const getAllCharactersSuccess = (state, { payload }) => {
    return {
        ...state,
        isLoadingGetCharacters: false,
        characterCards: payload.characterCards.map(card => {
            return {...card, age: makeAgeFromData(card.birthday) };
        })
    };
};

export const reset = (state, { payload }) => {
    return {
        ...state,
        filterState: {
            status: "",
            category: "",
            minAge: 0,
            maxAge: 100
        }
    };
};

const sortByAlphabetFunc = (sort, arr) => {
    arr.sort((a, b) => {
        if (a.name < b.name) return -1 * sort;
        if (a.name > b.name) return 1 * sort;
        else return 0;
    });

    const newArr = arr.slice();

    return newArr;
};

export const sortByAlphabet = (state, { payload }) => {
    if (state.sort === SORT_NO || state.sort === SORT_REVERSE) {
        return {
            ...state,
            characterCards: sortByAlphabetFunc(SORT_STRAIGHT, state.characterCards),
            sort: SORT_STRAIGHT
        };
    } else if (state.sort === SORT_STRAIGHT) {
        return {
            ...state,
            characterCards: sortByAlphabetFunc(SORT_REVERSE, state.characterCards),
            sort: SORT_REVERSE
        };
    }
};

export const changeFilterStateStatus = (state, { payload }) => {
    if (payload.key === "10") {
        return {
            ...state,
            filterState: {
                ...state.filterState,
                status: payload.allCategories
            }
        };
    }
    return {
        ...state,
        filterState: {
            ...state.filterState,
            status: payload.key
        }
    };
};
export const changeMinAge = (state, { payload }) => {
    return {
        ...state,
        filterState: {
            ...state.filterState,
            minAge: payload
        }
    };
};

export const changeMaxAge = (state, { payload }) => {
    return {
        ...state,
        filterState: {
            ...state.filterState,
            maxAge: payload
        }
    };
};
export const changeFilterCategoryStatus = (state, { payload }) => {
    if (payload.key === "10") {
        return {
            ...state,
            filterState: {
                ...state.filterState,
                category: payload.allCategories
            }
        };
    }
    return {
        ...state,
        filterState: {
            ...state.filterState,
            category: payload.key
        }
    };
};

export default initialState;