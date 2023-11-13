import {render, screen} from "@testing-library/react";
import Item from "./Item";

describe('Dashboard Item Component', ()=>{
    it('should render the correct text',()=>{
        const title = 'Dashboard title'
        render(<Item type={'VISUALIZATION'} name={title}/>)
        expect(screen.getByText(title)).toBeInTheDocument();
    })
})