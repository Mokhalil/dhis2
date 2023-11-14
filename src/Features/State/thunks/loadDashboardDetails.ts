import {createAsyncThunk} from "@reduxjs/toolkit";
import agent from "../../../App/Api/agent";
import {AxiosError} from "axios";
import {Details} from "../../../App/Models/Details";


export interface LoadDashboardDetailsRequest {
    id : string
}
export const loadDashboardDetails = createAsyncThunk(
    'dashboardDetails/Load',
    async (request:LoadDashboardDetailsRequest, { rejectWithValue }) => {
        try {
            const results: Details = await agent.Dashboards.details(request.id);
            if (!results) {
                return rejectWithValue(undefined);
            }
            return results;
        } catch (error) {
            if (error instanceof AxiosError) {
                // @ts-ignore
                return rejectWithValue(error.response.data);
            }
        }
    }
);

export const loadDetailsReducers ={
    pending : (state:any)=>{ state={
        loading : true,
        error : undefined
    }},
    fullfilled : (state:any, action:any)=>{
        const {payload} = action;
        state.error = undefined;
        state.loading= false;
        state.details = payload;
    },
    rejected : (state:any, action:any)=>{
        const {payload} = action;
        state.error = payload as string;
        state.loading= false;
        state.details = undefined;
    }
}
