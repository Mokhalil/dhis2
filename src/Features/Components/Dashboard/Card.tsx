import React from 'react';
import {Accordion, AccordionSummary, Typography, AccordionDetails} from "@mui/material";
import {Details} from "../../../App/Models/Details";
import Items from "../Item/Items";
import Star from '../Star/Star';
import {useAppDispatch} from "../../../App/Store/hooks";
import {addToStarred} from "../../State/slice";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useDashboards} from "../../Pages/useDashboards";

interface DashboardProps {
    details: Details,
    isCurrent?: boolean
    isStarred?: boolean,
    title: string,
    dashboard:string
}

const Card = ({details, isStarred, title,isCurrent,dashboard}: DashboardProps) => {
    const dispatch = useAppDispatch();
    const {changeCurrentItem, makeStarred} = useDashboards();
    const onStarred = (id: string) => {
        console.log(`Starred ${id}`)
        makeStarred(id);
    }
    return (
        <Accordion expanded={isCurrent}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>} onClick={()=> {
                changeCurrentItem(dashboard)
            }}>
                <Typography>{title}</Typography>
                <Star starred={isStarred} onClick={onStarred} id={details?.id}/>
            </AccordionSummary>
            <AccordionDetails>
                <Items items={details?.dashboardItems}/>
            </AccordionDetails>
        </Accordion>
    );
};

export default Card;