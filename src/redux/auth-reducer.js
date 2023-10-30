const CHANGE_USER = 'CHANGE_USER';

let initialState = {
    user: 'unknown',
    userData: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_USER:
            return {
                ...state,
                user: action.newType,
                userData: action.newUser
            }
        default:
            return state;
    }
}

export const changeUser = (newType, newUser) => (
    {
        type: CHANGE_USER,
        newType, newUser
    }
);

export default authReducer;