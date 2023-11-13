import {render, screen} from "@testing-library/react";
import Icon from "./Icon";

describe('Icon component', ()=>{
    it('should render map if dashboard type is Map',()=>{
        render(<Icon type={'MAP'}/>);
        const icon = screen.getByTestId('MapIcon')
        expect(icon).toBeInTheDocument();
    });
    it('should render BarChart if dashboard type is Visiualization',()=>{
        render(<Icon type={'VISUALIZATION'}/>);
        const icon = screen.getByTestId('BarChartIcon')
        expect(icon).toBeInTheDocument();
    })
    it('should render Abc if dashboard type is Text',()=>{
        render(<Icon type={'TEXT'}/>);
        const icon = screen.getByTestId('AbcIcon')
        expect(icon).toBeInTheDocument();
    })
    it('should render Dashboard if dashboard type is All',()=>{
        render(<Icon type={'All'}/>);
        const icon = screen.getByTestId('DashboardIcon')
        expect(icon).toBeInTheDocument();
    })
})