import {render} from "@testing-library/react";
import Dashboard from "./Card";
import {DashboardDetails} from "../../../App/Api/Mocks/dashboards";

describe('Dashboard Card Component', () => {
    it('should render the correct Dashboard items', () => {
        render(<Dashboard details={DashboardDetails} title={'Title'} dashboard={'asd'}/>)
    })
})