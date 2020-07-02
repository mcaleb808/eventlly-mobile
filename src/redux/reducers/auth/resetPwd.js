import {
    RESET_PASSWORD_START,
    RESET_PASSWORD_ERROR,
    RESET_PASSWORD_SUCCESS,
} from '../../../constants/action-types/auth/reset-password';

export default (state, { type, payload }) => {
    switch (type) {
        case RESET_PASSWORD_START:
            return {
                ...state,
                resetPassword: {
                    ...state.resetPassword,
                    loading: true,
                    error: null,
                    data:null,
                },
            };
        case RESET_PASSWORD_ERROR:
            return {
                ...state,
                resetPassword: {
                    ...state.resetPassword,
                    error: payload,
                    loading: false,
                },
            };
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPassword: {
                    ...state.resetPassword,
                    error: null,
                    loading: false,
                    data: payload.response,
                },
            };
        default:
            return null;
    }
};
