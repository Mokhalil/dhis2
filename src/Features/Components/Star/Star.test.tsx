import {render, screen} from "@testing-library/react";
import React from "react";
import StarButton from "./Star";

describe('Star component', ()=>{
    const id ='FGJJK'
    it('should render star icon if Starred = true',()=>{
        const mockClick = jest.fn();
        render(<StarButton onClick={mockClick} id={id} starred={true}/> );
        const icon = screen.getByTestId('StarIcon')
        expect(icon).toBeInTheDocument();
    });

    it('should render star border icon if Starred = false',()=>{
        const mockClick = jest.fn();
        render(<StarButton onClick={mockClick} id={id} starred={false}/> );
        const icon = screen.getByTestId('StarBorderIcon')
        expect(icon).toBeInTheDocument();
    });

})