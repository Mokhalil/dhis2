import {useAppDispatch} from "../../App/Store/hooks";
import {loadDashboards} from "../State/thunks/loadDashboards";
import {useSelector} from "react-redux";
import {getCurrent, getDetails, getLoadedDashboards} from "../State/selectors";
import {loadDashboardDetails} from "../State/thunks/loadDashboardDetails";
import {setCurrent} from "../State/slice";

export const useDashboards = ()=>{
    const dispatch = useAppDispatch();
    const dashboards = useSelector(getLoadedDashboards)
    const currentDashboard = useSelector(getDetails);
    const getDashboards = async ()=>{
        const results = await dispatch(loadDashboards())
        return results.payload;
    }
    const getDashboardDetails = async (id:string)=>{
        await dispatch(loadDashboardDetails({id}))
    }

    const initializeDashboard = async ()=>{
        const items = await getDashboards();
        if(!currentDashboard && items){
            // @ts-ignore
            const first = items?.dashboards[0];
            await getDashboardDetails(first.id);
        }
    }


    const changeCurrentItem =  async (id:string)=>{
        await dispatch(setCurrent(id));
        await getDashboardDetails(id);
    }
    return {
        dashboards,
        getDashboards,
        initializeDashboard,
        getDashboardDetails,
        currentDashboard,
        changeCurrentItem
    }
}