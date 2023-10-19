const initialState = {
    links: [
        {id: 1, title: 'Главная', url: '/'},
        // {id: 2, title: 'Регистрация компании', url: '/registration/company'},
        // {id: 3, title: 'Авторизация компании', url: '/authorization/company'},
        // {id: 4, title: 'Регистрация пользователя', url: '/registration/user'},
        // {id: 5, title: 'Авторизация пользователя', url: '/authorization/user'},
    ],
    auth: [
        {id: 1, title: 'Регистрация', url: '/registration'},
        {id: 2, title: 'Авторизация', url: '/authorization'},
    ]
};

const headerReducer = (state = initialState, action) => {
    return state;
}

export default headerReducer;