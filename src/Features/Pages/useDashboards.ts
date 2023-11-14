import {useAppDispatch} from "../../App/Store/hooks";
import {loadDashboards} from "../State/thunks/loadDashboards";
import {useSelector} from "react-redux";
import {getCurrent, getDetails, getLoadedDashboards, getStarred} from "../State/selectors";
import {loadDashboardDetails} from "../State/thunks/loadDashboardDetails";
import {addToStarred, removeFromStarred, setCurrent} from "../State/slice";

export const useDashboards = ()=>{
    const dispatch = useAppDispatch();
    const dashboards = useSelector(getLoadedDashboards)
    const currentDashboard = useSelector(getDetails);
    const starredList = useSelector(getStarred)

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

    const makeStarred = (id:string)=>{
        if(isStarred(id)) {
            dispatch(removeFromStarred(id));
            return;
        }
        dispatch(addToStarred(id));
    }
    const isStarred = (id:string):boolean=>{
        return starredList.findIndex(item => item === id) !== -1
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
        changeCurrentItem,
        isStarred,
        makeStarred
    }
}