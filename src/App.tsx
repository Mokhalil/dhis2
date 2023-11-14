import React, {useEffect} from 'react';
import './App.css';
import Dashboards from './Features/Pages/Dashboards';
import {useDashboards} from "./Features/Pages/useDashboards";

function App() {
    const {initializeDashboard }=useDashboards();
    useEffect(() => {
        initializeDashboard();
    },[])
    return (
        <>
           <Dashboards/>
        </>

    );
}

export default App;
