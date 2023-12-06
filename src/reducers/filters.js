const initialState = {
    filters: [],
    activeFilter: 'all',
    filterLoadingStatus: 'idle'
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTERS_FETCHING':
            return {
                ...state,
                filterLoadingStatus: 'loading'
            }
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload,
                filterLoadingStatus: 'idle'
            }

        case 'FILTERS_SET_ACTIVE':
            return {
                ...state,
                activeFilter: action.payload,
            }
        default: return state
    }
}

export default filters;