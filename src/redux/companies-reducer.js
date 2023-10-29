import moment from "moment";

let initialState = {
    companies: [
        {
            id: 0,
            email: 'company@abc.com',
            name: 'Компания 1',
            fullName: 'ООО Компания 1',
            password: 'company',
            description: null,
            location: 'Владивосток',
            specialization: 'Кибербезопасность',
            iTN: 1234567890,
            logo: 'https://img.freepik.com/premium-vector/company-logo-with-avatar-design_1465-2.jpg',
            url: null,
            vacancies: [],
            favorites: [],
            createdAt: moment(),
            updatedAt: null
        },
        {
            id: 1,
            email: 'company@company.com',
            name: 'Компания 2',
            fullName: 'ООО Компания 2',
            password: 'company123',
            description: null,
            location: 'Владивосток',
            specialization: 'Экономика',
            iTN: 1234567890,
            logo: 'https://img.freepik.com/premium-vector/company-logo-with-avatar-design_1465-2.jpg',
            url: null,
            vacancies: [],
            favorites: [],
            createdAt: moment(),
            updatedAt: null
        },
        {
            id: 2,
            email: 'admin@admin.com',
            name: 'Компания 3',
            fullName: 'ООО Компания 3',
            password: 'admin',
            description: null,
            location: 'Владивосток',
            specialization: 'Менеджмент',
            iTN: 1234567890,
            logo: 'https://img.freepik.com/premium-vector/company-logo-with-avatar-design_1465-2.jpg',
            url: null,
            vacancies: [],
            favorites: [],
            createdAt: moment(),
            updatedAt: null
        },

    ]
}

const companiesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default companiesReducer;