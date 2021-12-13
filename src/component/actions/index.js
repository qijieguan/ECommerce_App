export const setList = list => {
    return {
        type: 'SET_LIST',
        payload: list
    }
}

export const setSearch = word => {
    return {
        type: 'SET_WORD',
        payload: word
    }
}

