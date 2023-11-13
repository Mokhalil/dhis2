import {render, screen} from "@testing-library/react";
import Items from "./Items";
import {DashboardDetails} from "../../../App/Api/Mocks/dashboards";
import {getDashboardItemTitle, Item} from '../../../App/Models/Item';
describe('Items Component',()=>{
    it('should render all passed dashboard items',()=>{
        render(<Items items={DashboardDetails.dashboardItems}/> )
        DashboardDetails.dashboardItems.forEach((item: Item)=>{
            expect(screen.getByText(getDashboardItemTitle(item)!)).toBeInTheDocument()
        })
    })
})