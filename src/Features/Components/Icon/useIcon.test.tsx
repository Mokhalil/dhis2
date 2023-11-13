import {IconType, useIcon} from "./useIcon";
import {BarChart} from "@mui/icons-material";

describe('UseIcon', ()=>{
    it('should return BarChart icon if type is Visualization',()=>{
        const result = useIcon({type:'VISUALIZATION'})
        expect(result.name).toBe(IconType.BarChart)
    });
    it('should return Abc icon if type is Text',()=>{
        const result = useIcon({type:'TEXT'})
        expect(result.name).toBe(IconType.Abc)
    })
    it('should return Map icon if type is Map',()=>{
        const result = useIcon({type:'MAP'})
        expect(result.name).toBe(IconType.Map)
    })
    it('should return Dashboard icon if type is All',()=>{
        const result = useIcon({type:'All'})
        expect(result.name).toBe(IconType.Dashboard)
    })
})