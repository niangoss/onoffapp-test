import * as actions from './actions'
import {GET_CALLS_REQUEST} from "./actions";
import {CALL_LOGS} from "../mocks/call-logs";
import {GET_CALLS_SUCCESS} from "./actions";
import {GET_CALLS_FAILURE} from "./actions";

describe('get calls actions', () => {

    it('getCallsRequest should create GET_CALLS_REQUEST action', () => {
        jest.spyOn(actions, 'getCallsRequest').mockImplementation(() => ({ type: GET_CALLS_REQUEST}));
        expect(actions.getCallsRequest()).toEqual({
            type: GET_CALLS_REQUEST
        })
    });

    it('getCallsSuccess should create GET_CALLS_SUCCESS action', () => {
        expect(actions.getCallsSuccess(CALL_LOGS)).toEqual({
            type: GET_CALLS_SUCCESS,
            payload: CALL_LOGS
        })
    });

    it('getCallsFailure should create GET_CALLS_FAILURE action', () => {
        const error = {
            "status": 401,
            "message": "The access token expired"
        };

        expect(actions.getCallsFailure(error)).toEqual({
            type: GET_CALLS_FAILURE,
            payload: error
        })
    });
});
