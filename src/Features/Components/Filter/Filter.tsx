import React from 'react';
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";

interface FilterProp{
    filter?:string,
    onChange : (id:string)=>void
}
const Filter = ({filter, onChange}:FilterProp) => {
    return (
        <>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={filter??'All'}
                label="Type"
                onChange={(event:SelectChangeEvent)=>{onChange(event.target.value)}}
            >
                <MenuItem value="All">
                    <em>All</em>
                </MenuItem>
                <MenuItem value={'VISUALIZATION'}>VISUALIZATION</MenuItem>
                <MenuItem value={'MAP'}>MAP</MenuItem>
                <MenuItem value={'TEXT'}>TEXT</MenuItem>
            </Select>
        </>
    );
};

export default Filter;