import {RootState} from "../../App/Store/store";

export const getFilter = (state: RootState) => state.dashboards.filter;
export const getCurrent = (state:RootState)=> state.dashboards.current;
export const isStarred = (state:RootState, id: string)=> state.dashboards.starred?.includes(id);
export const getDashboards = (state:RootState)=>state.dashboards.dashboards!;