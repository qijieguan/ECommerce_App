export const addList = item => {
    return {
        type: 'ADD_LIST',
        payload: item
    }
}

export const setSearch = word => {
    return {
        type: 'SET_WORD',
        payload: word
    }
}

export const addCart = item => {
    return {
        type: 'ADD_CART',
        payload: item
    }
}

