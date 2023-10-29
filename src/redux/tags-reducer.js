const initialState = {
    tags: [
        {id: 0, tag: 'HTML'},
        {id: 1, tag: 'Python'},
        {id: 2, tag: 'Pandas'},
        {id: 3, tag: 'Уголовное право'},
        {id: 4, tag: 'CSS'},
        {id: 5, tag: 'JavaScript'},
    ]
}

const tagsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default tagsReducer;