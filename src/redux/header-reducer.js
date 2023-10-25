const initialState = {
    userManagement: [
        {id: 'unknown', title: 'Неавторизованный', url: '/'},
        {id: 'employee', title: 'Сотрудник', url: '/employee'},
        {id: 'company', title: 'Компания', url: '/company'}
    ],
    links: [
        {id: 1, title: 'Главная', url: '/'},
        {id: 2, title: 'Вакансии', url: '/vacancies'},
        {id: 3, title: 'Компании', url: '/companies'},
        {id: 4, title: 'Профиль', url: '/profile'}
    ],
    employeeLinks: [
        {id: 1, title: 'Главная', url: '/employee/'},
        {id: 2, title: 'Вакансии', url: '/employee/vacancies'},
        {id: 3, title: 'Избранное', url: '/employee/favorites'},
        {id: 4, title: 'Профиль', url: '/employee/profile'}
    ],
    companyLinks: [
        {id: 1, title: 'Главная', url: '/company/'},
        {id: 2, title: 'Сотрудники', url: '/company/employees'},
        {id: 3, title: 'Избранное', url: '/company/favorites'},
        {id: 4, title: 'Профиль', url: '/company/profile'}
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