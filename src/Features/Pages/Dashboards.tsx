import React, {useEffect} from 'react';
import {getDashboards} from "../State/selectors";
import {useSelector} from "react-redux";
import List from "../Components/List";
import {DashboardDetails} from "../../App/Api/Mocks/dashboards";

const Dashboards = () => {
const dashboards = useSelector(getDashboards);
console.log(dashboards)
    return (
        <>
            {
                dashboards?<List dashboards = {dashboards} current={DashboardDetails} starred={true}/>:<div> loading</div>
            }
        </>
    );
};

export default Dashboards;