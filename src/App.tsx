import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {useAppDispatch} from "./App/Store/hooks";
import {loadDashboards} from "./Features/State/thunks/loadDashboards";
import Dashboards from './Features/Pages/Dashboards';

function App() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(loadDashboards())
    },[])
    return (
        <>
           <Dashboards/>
        </>

    );
}

export default App;
