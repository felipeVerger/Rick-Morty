export const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isRegistered: false,
    isLogin: false,
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state, ...action.payload, isRegistered: true
            }
        case 'LOGIN':
            return {
                ...state, ...action.payload, isLogin: true
            }
        case 'LOGOUT':
            return {
                initialState
            }
        default:
            return state
    }
}