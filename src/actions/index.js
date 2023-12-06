export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const heroesAdding = () => {
    return {
        type: 'HEROES_ADDING'
    }
}

export const heroesAdded = (heroes) => {
    return {
        type: 'HEROES_ADDED',
        payload: heroes
    }
}

export const heroesDeleting = (heroes) => {
    return {
        type: 'HEROES_DELETING',
        payload: heroes
    }
}

export const heroesDeleted = (heroes) => {
    return {
        type: 'HEROES_DELETED',
        payload: heroes
    }
}