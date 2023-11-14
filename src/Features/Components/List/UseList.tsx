import {useAppDispatch} from "../../../App/Store/hooks";
import {useSelector} from "react-redux";
import {getStarred} from "../../State/selectors";

export const useList = () => {
    const dispatch = useAppDispatch();
    const starredList = useSelector(getStarred)

    const isStarred = (id: string) => {
        return starredList.findIndex(item => item === id) !== -1
    }
    return {
        isStarred
    }
}