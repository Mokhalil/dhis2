import React, {useEffect, useState} from 'react';
import {getLoadedDashboards} from "../State/selectors";
import {useSelector} from "react-redux";
import List from "../Components/List/List";
import {DashboardDetails} from "../../App/Api/Mocks/dashboards";
import {useDashboards} from "./useDashboards";
import Filter from "../Components/Filter/Filter";
import {Details} from "../../App/Models/Details";

const Dashboards = () => {
    const {dashboards,currentDashboard ,setFilterKeyword, keyword,getFilteredDashboard}=useDashboards();
    const [items, setItems]= useState<Details>();
    const data = getFilteredDashboard();
    useEffect(() => {
    }, [currentDashboard]);
    return (
        <>
            <div>
                Dashboards
            </div>
            <Filter onChange={setFilterKeyword} filter={keyword}/>
            {
                dashboards?<List dashboards = {dashboards} current={data!}/>:<div> loading</div>
            }
        </>
    );
};

export default Dashboards;