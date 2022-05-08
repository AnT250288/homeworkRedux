const initialState = {
    news: []
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "HIDE_SHOW":
            return {
                ...initialState
                    .map(el => el.id === id
                        ? {...el, isOpened: !isOpened}
                        : el)
            }
        case "REVERSE-NEWS":
            return {
                ...initialState.reverse()
                    .map(el => el.isOpened !== isOpened)
            }

        default:
            return state
    }
}

export const hideNewsAC = (id, isOpened) => {
    return {
        type: "HIDE_SHOW",
        id,
        isOpened,
    }
}

export const reverseAC = (isOpened) => {
    return {
        type: "REVERSE-NEWS",
        isOpened
    }
}


export default newsReducer


