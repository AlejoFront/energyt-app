const AUTH_LOADING = '[AUTH LD] AUTH LOADING'
const AUTH_LOADED = '[AUTH LD] AUTH LOADED'
const AUTH_LOGIN = '[AUTH LG] AUTH LOGIN'
const AUTH_LOGOUT = '[AUTH LG] AUTH LOGOUT'

const initialState = { isAuthenticated: false,  loading: false }

export const authLoading = () => ({ type: AUTH_LOADING });
export const authLoaded = () => ({ type: AUTH_LOADED });
export const authLogin = () => ({ type: AUTH_LOGIN });
export const authLogout = () => ({ type: AUTH_LOGOUT });

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOADING:
            return {
                ...state,
                loading: true
            }
        case AUTH_LOADED:
            return {
                ...state,
                loading: false
            }
        case AUTH_LOGIN:
            return {
                ...state,
                loading: false,
                isAuthenticated: true
            }
        case AUTH_LOGOUT:
            return state = initialState;
        default:
            return state;
    }
}

export default AuthReducer;