import {Dashboard} from "../../App/Models/Dashboard";
import {Details} from "../../App/Models/Details";

export interface DashboardState {
    current?: string,
    filter?: string,
    starred: string[],
    dashboards?: Dashboard[],
    details?: Details,
    loading: boolean,
    error?: string
}