import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "./initialState";
import {loadDashboardReducers, loadDashboards} from "./thunks/loadDashboards";
import {loadDashboardDetails, loadDetailsReducers} from "./thunks/loadDashboardDetails";


export const dashboardSlice = createSlice({
    name: 'dashboards',
    initialState,
    reducers: {
        setCurrent: (state, action: PayloadAction<string>) => {
            state.current = action.payload
        },
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload
        },
        addToStarred: (state, action: PayloadAction<string>) => {
            if (state.starred.findIndex(item => item === action.payload) === -1)
                state.starred.push(action.payload)
        },
        removeFromStarred: (state, action: PayloadAction<string>) => {
            const index = state.starred.findIndex(item => item === action.payload);
            if ( index!== -1)
                state.starred.splice(index,1)
        },
        setError: state => {
        }
    },
    extraReducers: (builder) => {
        // Loading dashboards handlers
        builder.addCase(loadDashboards.pending, loadDashboardReducers.pending);
        builder.addCase(loadDashboards.fulfilled, loadDashboardReducers.fullfilled);
        builder.addCase(loadDashboards.rejected, loadDashboardReducers.rejected);

        // Loading dashboard details handlers
        builder.addCase(loadDashboardDetails.pending, loadDetailsReducers.pending);
        builder.addCase(loadDashboardDetails.fulfilled, loadDetailsReducers.fullfilled);
        builder.addCase(loadDashboardDetails.rejected, loadDetailsReducers.rejected);
    }
})

export default dashboardSlice.reducer;
export const {removeFromStarred, setCurrent, setFilter, addToStarred, setError} = dashboardSlice.actions;

