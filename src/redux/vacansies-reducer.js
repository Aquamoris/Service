import moment from "moment";

let initialState = {
    vacancies: [
        {
            id: 0,
            title: 'Вакансия 1',
            description: 'Описание',
            location: 'Владивосток',
            salary: '100000-150000',
            remote: false,
            workExperience: '1-3 года',
            workHours: 'Полный день',
            contacts: null,
            company: 'ООО Компания',
            companyId: 0,
            jobInvites: [],
            vacancyTag: [],
            createdAt: moment(),
            updatedAt: null
        },
        {
            id: 1,
            title: 'Вакансия 2',
            description: 'Описание',
            location: 'Владивосток',
            salary: '10000-20000',
            remote: false,
            workExperience: 'Без опыта',
            workHours: 'Полный день',
            contacts: null,
            company: 'ООО Компания',
            companyId: 1,
            jobInvites: [],
            vacancyTag: [],
            createdAt: moment(),
            updatedAt: null
        },
        {
            id: 2,
            title: 'Вакансия 3',
            description: 'Описание',
            location: 'Владивосток',
            salary: '50000-150000',
            remote: false,
            workExperience: '1-3 года',
            workHours: 'Полный день',
            contacts: '89111111111',
            company: 'ООО Компания',
            companyId: 1,
            jobInvites: [],
            vacancyTag: [],
            createdAt: moment(),
            updatedAt: null
        },
        {
            id: 3,
            title: 'Вакансия 4',
            description: 'Описание',
            location: 'Владивосток',
            salary: '100000-150000',
            remote: false,
            workExperience: '1-3 года',
            workHours: 'Полный день',
            contacts: null,
            company: 'ООО Компания',
            companyId: 0,
            jobInvites: [],
            vacancyTag: [],
            createdAt: moment(),
            updatedAt: null
        },
        {
            id: 4,
            title: 'Вакансия 5',
            description: 'Описание',
            location: 'Владивосток',
            salary: '100000-150000',
            remote: false,
            workExperience: '3-6 лет',
            workHours: 'Полный день',
            contacts: 'email@email.ru',
            company: 'ООО Компания',
            companyId: 1,
            jobInvites: [],
            vacancyTag: [],
            createdAt: moment(),
            updatedAt: null
        },
    ]
}

const vacanciesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default vacanciesReducer;