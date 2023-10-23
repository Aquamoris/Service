import moment from "moment";

const REGISTRATION_NEW_USER = 'REGISTRATION_NEW_USER';

let initialState = {
    users: [
        {
            id: 0,
            username: 'user1',
            email: 'bla@bla.com',
            password: 'qwerty',
            location: 'Vladivostok',
            disableCategory: 3,
            avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
            favorites: [],
            jobInvites: [],
            employeeTag: [],
            createdAt: '0',
            updatedAt: '0'
        }
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
        default:
            return state
    }
}

export const registrationNewUser = (username, email, password) => (
    {
        type: REGISTRATION_NEW_USER,
        username, email, password
    }
)

export default usersReducer;