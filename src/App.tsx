import { Container } from '@mui/material';
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
            <Container maxWidth="sm">
           <Dashboards/>
            </Container>
        </>

    );
}

export default App;
