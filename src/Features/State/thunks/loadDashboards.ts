import {createAsyncThunk} from "@reduxjs/toolkit";
import {Dashboard} from "../../../App/Models/Dashboard";
import agent from "../../../App/Api/agent";
import {AxiosError} from "axios";

export const loadDashboards = createAsyncThunk(
    'dashboards/Load',
    async (_, { rejectWithValue }) => {
        try {
            const results: Dashboard[] = await agent.Dashboards.list();
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

export const loadDashboardReducers ={
    pending : (state:any)=>{ state={
        loading : true,
        error : undefined
    }},
    fullfilled : (state:any, action:any)=>{
        const {payload} = action;
        state.error = undefined;
        state.loading= false;
        state.dashboards = payload.dashboards;
    },
    rejected : (state:any, action:any)=>{
        const {payload} = action;
        state.error = payload as string;
        state.loading= false;
        state.dashboards = [];
    }
}
