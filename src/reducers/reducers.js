import {
    GET_CALLS_FAILURE,
    GET_CALLS_REQUEST,
    GET_CALLS_SUCCESS
} from "../actions/actions";

const calls = (state = {}, action) => {
    switch (action.type) {
        case GET_CALLS_REQUEST:
            return {
                ...state,
                loading: true,
                failure: false
            };
        case GET_CALLS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                success: true,
                failure: false
            };
        case GET_CALLS_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
                failure: true,
                error: action.payload
            };
        default:
            return state
    }
};

export default calls
