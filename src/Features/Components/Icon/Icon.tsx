import React from 'react';
import {ItemType} from "../../../App/Models/Item";
import {useIcon} from "./useIcon";

interface IconProps {
    type: ItemType
}

const Icon = ({type}: IconProps) => {
    const {control : Control} = useIcon({type});
    return (<Control/>);
};

export default Icon;