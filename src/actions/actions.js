import {CALL_LOGS} from "../mocks/call-logs";

export const GET_CALLS_REQUEST = 'GET_CALLS_REQUEST';
export const GET_CALLS_SUCCESS = 'GET_CALLS_SUCCESS';
export const GET_CALLS_FAILURE = 'GET_CALLS_FAILURE';


export function getCallsRequest() {
    return (dispatch) => {
        dispatch({
            type: GET_CALLS_REQUEST
        });
        return Promise.all(CALL_LOGS)
            .then((values) => {
                dispatch(getCallsSuccess(values));
            })
            .catch(error => {
                dispatch(getCallsFailure(error));
            });
    }
}

export function getCallsSuccess(values) {
    return{
        type: GET_CALLS_SUCCESS,
        payload: values
    }
}

export function getCallsFailure(err) {
    return {
        type: GET_CALLS_FAILURE,
        payload: err
    }
}
