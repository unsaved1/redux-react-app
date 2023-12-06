export const fetchFilters = (request) => (dispatch) => {
    dispatch(filtersFetching());
    request('http://localhost:3001/filters')
        .then(res => dispatch(filtersFetched(res)));
}

export const filtersFetching = () => {
    return {
        type: 'FILTERS_FETCHING'
    }
}

export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

export const filtersSetActive = (filter) => {
    return {
        type: 'FILTERS_SET_ACTIVE',
        payload: filter
    }
}