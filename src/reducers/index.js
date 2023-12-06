const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }

            
        case 'HEROES_ADDING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_ADDED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }


        case 'HEROES_FILTERING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FILTERED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }


        case 'HEROES_DELETING':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_DELETED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }


        case 'HEROES_FETCHING_ERROR':
        return {
            ...state,
            heroesLoadingStatus: 'error'
        }
        default: return state
    }
}

export default reducer;