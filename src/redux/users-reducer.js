import moment from "moment";

const REGISTRATION_NEW_USER = 'REGISTRATION_NEW_USER';
const CHECK_USER = 'CHECK_USER';

const initialState = {
    currentUser: null,
    users: [
        {
            id: 0,
            username: 'Соискатель 1',
            email: 'bla@bla.com',
            password: 'qwerty',
            location: 'Владивосток',
            disableCategory: 2,
            avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
            favorites: [],
            jobInvites: [],
            employeeTag: [],
            createdAt: moment(),
            updatedAt: null,
        },
        {
            id: 1,
            username: 'Соискатель 2',
            email: 'admin@admin',
            password: 'admin',
            location: 'Владивосток',
            disableCategory: 1,
            avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
            favorites: [],
            jobInvites: [],
            employeeTag: [],
            createdAt: moment(),
            updatedAt: null,
        },
        {
            id: 2,
            username: 'Соискатель 3',
            email: 'blablabla@bla.com',
            password: 'qwerty12345',
            location: 'Владивосток',
            disableCategory: 1,
            avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
            favorites: [],
            jobInvites: [],
            employeeTag: [],
            createdAt: moment(),
            updatedAt: null,
        },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION_NEW_USER:
            return {
                ...state,
                users: [...state.users, {
                    id: state.users.length,
                    username: action.username,
                    email: action.email,
                    password: action.password,
                    location: null,
                    disableCategory: null,
                    avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
                    favorites: [],
                    jobInvites: [],
                    employeeTag: [],
                    createdAt: moment(),
                    updatedAt: null
                }]
            }
        case CHECK_USER:
            for (let user of state.users) {
                    if (user.email === action.email && user.password === action.password) {
                        return {
                            ...state,
                            currentUser: user
                        };
                    }
                }
            return {
                ...state
            };
        default:
            return state
    }
}

export const checkUser = (email, password) => (
    {
        type: CHECK_USER,
        email, password
    }
)

export const registrationNewUser = (username, email, password) => (
    {
        type: REGISTRATION_NEW_USER,
        username, email, password
    }
)

export default usersReducer;