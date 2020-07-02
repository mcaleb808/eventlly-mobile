import {
    SET_NEW_PASSWORD_START,
    SET_NEW_PASSWORD_ERROR,
    SET_NEW_PASSWORD_SUCCESS,
    CLEAR_SET_NEW_PASSWORD_SUCCESS,
} from '../../../constants/action-types/auth/setNewPassword';

export default (state, { type, payload }) => {
    switch (type) {
        case SET_NEW_PASSWORD_START:
            return {
                ...state,
                setNewPassword: {
                    ...state.setNewPassword,
                    loading: true,
                    error: null,
                },
            };
        case SET_NEW_PASSWORD_ERROR:
        case CLEAR_SET_NEW_PASSWORD_SUCCESS:
            return {
                ...state,
                setNewPassword: {
                    ...state.setNewPassword,
                    error: payload,
                    loading: false,
                    success: false,
                },
            };
        case SET_NEW_PASSWORD_SUCCESS:
            return {
                ...state,
                setNewPassword: {
                    ...state.setNewPassword,
                    error: null,
                    loading: false,
                    success: true,
                    msg: 'Your password was successfully reset,you may now login',
                },
            };
        default:
            return null;
    }
};