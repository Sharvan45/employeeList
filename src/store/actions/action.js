import * as ACTION_TYPES from './action_type';

export const login = (data) => {
    return {
        type: ACTION_TYPES.LOGIN,
        payload: data
    }
}

export const logout = () => {
    return {
        type: ACTION_TYPES.LOGOUT_SUCCESS
    }
}

export const fetchEmployess = () => {
    return {
        type: ACTION_TYPES.FETCH_EMPLOYEES
    }
}