import {RootState} from "../../App/Store/store";

export const getFilter = (state: RootState) => state.dashboards.filter;
export const getCurrent = (state:RootState)=> state.dashboards.current;
export const getDetails = (state:RootState)=> state.dashboards.details;
export const isStarred = (state:RootState, id: string)=> state.dashboards.starred?.includes(id);
export const getLoadedDashboards = (state:RootState)=>state.dashboards.dashboards!;
export const getStarred = (state:RootState)=>state.dashboards.starred;