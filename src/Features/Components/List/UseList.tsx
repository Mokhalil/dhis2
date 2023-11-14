import {useAppDispatch} from "../../../App/Store/hooks";
import {useSelector} from "react-redux";
import {getStarred} from "../../State/selectors";
import {useDashboards} from "../../Pages/useDashboards";

export const useList = () => {
    const dispatch = useAppDispatch();

    const isStarred = (id: string) => {
        return
    }
    return {
        isStarred
    }
}