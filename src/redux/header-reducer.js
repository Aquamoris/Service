const initialState = {
    userManagement: [
        {id: 'unknown', title: 'Неавторизованный', url: '/'},
        {id: 'employee', title: 'Сотрудник', url: '/'},
        {id: 'company', title: 'Компания', url: '/'}
    ],
    links: [
        {id: 1, title: 'Главная', url: '/'},
        {id: 2, title: 'Вакансии', url: '/vacancies'},
        {id: 3, title: 'Компании', url: '/companies'},
        {id: 4, title: 'О нас', url: '/about'},
    ],
    employeeLinks: [
        {id: 1, title: 'Главная', url: '/'},
        {id: 2, title: 'Вакансии', url: '/employee/vacancies'},
        {id: 3, title: 'Избранное', url: '/employee/favorites/'},
        {id: 4, title: 'О нас', url: '/about'}
    ],
    companyLinks: [
        {id: 1, title: 'Главная', url: '/'},
        {id: 2, title: 'Сотрудники', url: '/company/employees'},
        {id: 3, title: 'Ваши вакансии', url: '/company/vacancies/'},
        {id: 4, title: 'Избранное', url: '/company/favorites/'},
        {id: 4, title: 'О нас', url: '/about'}
    ],
    auth: [
        {id: 1, title: 'Регистрация', url: '/registration'},
        {id: 2, title: 'Авторизация', url: '/login'},
    ]
};

const headerReducer = (state = initialState, action) => {
    return state;
}

export default headerReducer;