const CHANGE_USER = 'CHANGE_USER';

let initialState = {
    user: 'unknown',
    
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_USER:
            return {
                ...state,
                user: action.newUser
            }
        default:
            return state;
    }
}

export const changeUser = (newUser) => ({type: CHANGE_USER, newUser});

export default authReducer;