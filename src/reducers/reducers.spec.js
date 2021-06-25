import calls from './reducers'
import * as actions from '../actions/actions'
import {GET_CALLS_FAILURE, GET_CALLS_REQUEST, GET_CALLS_SUCCESS} from '../actions/actions'
import {CALL_LOGS} from "../mocks/call-logs";

describe('calls reducer', () => {
    it('calls handle initial state', () => {
        expect(
            calls(undefined, {})
        ).toEqual({})
    });

    it('should handle GET_CALLS_REQUEST', () => {

        jest.spyOn(actions, 'getCallsRequest').mockImplementation(() => ({ type: GET_CALLS_REQUEST}));

        expect(
            calls({}, {
                type: GET_CALLS_REQUEST
            })
        ).toEqual({
            loading: true,
            failure: false
        });
    });

    it('should handle GET_CALLS_SUCCESS', () => {
        expect(
            calls({
                loading: true,
                failure: false,
            }, {
                type: GET_CALLS_SUCCESS,
                payload: CALL_LOGS
            })
        ).toEqual({
            data: CALL_LOGS,
            loading: false,
            success: true,
            failure: false
        });
    });

    it('should handle GET_CALLS_FAILURE', () => {
        const error = {
            "status": 401,
            "message": "The access token expired"
        };
        expect(
            calls({
                loading: true,
                failure: false,
            }, {
                type: GET_CALLS_FAILURE,
                payload: error
            })
        ).toEqual({
            loading: false,
            success: false,
            failure: true,
            error: error
        });
    });

});

