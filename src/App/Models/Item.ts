import {Map, Visualization} from "./Types";

export interface Item {
    id: string
    type: string
    users: any[]
    visualization?: Visualization
    map?: Map
    text?:string
    shape: string
    x: number
    y: number
    reports: any[]
    resources: any[]
    h: number
    w: number
}

export const getDashboardItemTitle = (item: Item)=>{
    const type = item.type;
    switch (type as ItemType) {
        case 'VISUALIZATION':
            return item.visualization?.name
        case 'MAP':
            return item.map?.name
        case 'TEXT':
            return item.text
        default:
            return ''
    }
}
export type ItemType = 'VISUALIZATION'| 'MAP' | 'TEXT' | 'All'