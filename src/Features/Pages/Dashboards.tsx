import React, {useEffect} from 'react';
import {getLoadedDashboards} from "../State/selectors";
import {useSelector} from "react-redux";
import List from "../Components/List/List";
import {DashboardDetails} from "../../App/Api/Mocks/dashboards";
import {useDashboards} from "./useDashboards";

const Dashboards = () => {
    const {dashboards,currentDashboard }=useDashboards();

    useEffect(() => {

    }, [currentDashboard]);
    return (
        <>
            {
                dashboards?<List dashboards = {dashboards} current={currentDashboard!}/>:<div> loading</div>
            }
        </>
    );
};

export default Dashboards;