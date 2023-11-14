import {ItemType} from "../../../App/Models/Item";
import {Map, BarChart, Abc, Dashboard} from "@mui/icons-material";

interface UseIconParams {
    type : ItemType
}
export const IconType={
    BarChart :'BarChart',
    Map:'Map',
    Abc:'Abc',
    Dashboard:'Dashboard',
    Star:"Star",
    StarBorder:'StarBorder'
}
export const useIcon = ({type}: UseIconParams)=>{
    switch (type){
        case "VISUALIZATION":
            return {control:BarChart, name:IconType.BarChart};
        case "TEXT":
            return {control:Abc, name:IconType.Abc};
        case "MAP":
            return {control:Map, name:IconType.Map};
        default:
            return {control:Dashboard, name:IconType.Dashboard};

    }
}