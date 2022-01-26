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

export const deleteCart = id => {
    return {
        type: 'DELETE_CART',
        payload: id
    }
}

export const clearCart = () => {
    return {
        type: 'CLEAR_CART',
        payload: ""
    }
}

