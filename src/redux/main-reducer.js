let initialState = {
    categories: [
        {id: 0, category: 'IT', amount: 3459},
        {id: 1, category: 'Экономика', amount: 3569},
        {id: 2, category: 'Строительство', amount: 1243},
        {id: 3, category: 'Менеджмент', amount: 5445},
        {id: 4, category: 'Архитектура', amount: 3123},
    ]
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default mainReducer;