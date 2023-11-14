import React from 'react';
import {Dashboard} from "../../../App/Models/Dashboard";
import Card from "../Dashboard/Card";
import {Details} from "../../../App/Models/Details";
import {useList} from "./UseList";
import {useDashboards} from "../../Pages/useDashboards";

interface ListProps {
    dashboards : Dashboard[],
    current : Details,

}

const List = ({dashboards, current}:ListProps) => {
    const {isStarred} = useDashboards();
    return (
        <>
            {
                dashboards.map((item:Dashboard)=><Card details={current} title={item.displayName} isCurrent={item.id===current?.id} isStarred={isStarred(item.id)} dashboard={item.id} key={item.id}/>)
            }
        </>
    );
};

export default List;