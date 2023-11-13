import React from 'react';
import {IconButton} from "@mui/material";
import {useStarred} from "./useStarred";

interface  StarProps{
    starred?:boolean,
    onClick: (id:string)=>void
    id:string
}

const StarButton = ({starred, onClick,id}:StarProps) => {
    const {control: Control} = useStarred(starred!);
    return (
        <>
            <IconButton onClick={()=>onClick(id)}>
                <Control/>
            </IconButton>
        </>
    );
};

export default StarButton;