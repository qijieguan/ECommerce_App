export const addList = item => {
    return {
        type: 'INSERT_LIST',
        payload: item
    }
}

export const addComment = comment => {
    return {
        type: 'INSERT_COMMENT',
        payload: comment
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
        type: 'INSERT_CART',
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

