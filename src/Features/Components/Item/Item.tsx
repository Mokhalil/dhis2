import React from 'react';
import {ItemType} from "../../../App/Models/Item";
import Icon from "../Icon/Icon";
import {Typography} from "@mui/material";

interface ItemProps{
    type: ItemType,
    name? : string
}
const Item = ({type, name}:ItemProps) => {
    return (
        <div>
            <Icon type={type}/>
            <Typography>{name}</Typography>
        </div>
    );
};

export default Item;