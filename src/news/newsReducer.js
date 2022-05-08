const initialState = {
    news: []
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "HIDE_SHOW":
            console.log(initialState)
            return {
                ...initialState
                    .map(el => el.id === action.id
                        ? {...el, isOpened: !action.isOpened}
                        : el)
            }


        case "REVERSE-NEWS":
            return {
                ...initialState.reverse()
                    .map(el => el.isOpened !== action.isOpened)
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


