import React from 'react';
import {Dashboard} from "../../App/Models/Dashboard";
import Card from "./Dashboard/Card";
import {Details} from "../../App/Models/Details";

interface ListProps {
    dashboards : Dashboard[],
    current : Details,
    starred : boolean,

}
const List = ({dashboards, current, starred}:ListProps) => {
    return (
        <>
            {
                dashboards.map((item:Dashboard)=><Card details={current} title={item.displayName} isCurrent={item.id===current.id}/>)
            }
        </>
    );
};

export default List;