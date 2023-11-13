import StarIcon from "@mui/icons-material/Star";
import {IconType} from "../Icon/useIcon";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export const useStarred = (isStarred: boolean)=>{
    if(isStarred)
        return {control:StarIcon, name:IconType.Star};
    return {control:StarBorderIcon, name:IconType.StarBorder};

}