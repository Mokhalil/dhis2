import React from 'react';
import {getDashboardItemTitle, Item as DashboardItem, ItemType} from "../../../App/Models/Item";
import Item from './Item';

interface ItemsProps{
    items : DashboardItem[]
}
const Items = ({items}:ItemsProps) => {
    return (
        <>
        {
            items.map((item: DashboardItem) => <Item type={item.type as ItemType}
                                                              name={getDashboardItemTitle(item)} key={item.id}/>)
        }
        </>
    );
};

export default Items;