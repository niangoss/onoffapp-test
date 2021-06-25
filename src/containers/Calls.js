import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCallsRequest} from "../actions/actions";
import CallList from "../components/CallList";


export default function Calls() {

    const { success, loading, failure, data } = useSelector(state => state.calls);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!data) {
            dispatch(getCallsRequest());
        }
    });

    return (

        <div>
            {loading && <span>Chargement...</span>}
            {failure && !loading && <span>Erreur</span>}
            {success && !loading && <CallList items={data}/>}
        </div>
    );
}
