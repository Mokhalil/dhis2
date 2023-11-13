import {Item} from "./Item";
import {Access} from "./Access";

export interface Details {
    access: Access
    restrictFilters: boolean
    displayName: string
    id: string
    dashboardItems: Item[]
    starred: boolean
}

