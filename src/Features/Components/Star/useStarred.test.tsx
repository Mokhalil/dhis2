import {IconType, useIcon} from "../Icon/useIcon";
import {useStarred} from "./useStarred";

describe('useStarred', ()=>{
    it('should return Star icon if starred = true',()=>{
        const result = useStarred(true)
        expect(result.name).toBe(IconType.Star)
    });
    it('should return StarBorder icon if starred = false',()=>{
        const result = useStarred(false)
        expect(result.name).toBe(IconType.StarBorder)
    })
})