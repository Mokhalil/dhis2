import React from 'react';
import {ItemType} from "../../../App/Models/Item";
import Icon from "../Icon/Icon";
import {Box, Typography} from "@mui/material";

interface ItemProps{
    type: ItemType,
    name? : string
}
const Item = ({type, name}:ItemProps) => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
            <Icon type={type}/>
            <Typography>{name}</Typography>
            </Box>
        </>
    );
};

export default Item;