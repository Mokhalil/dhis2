import {fireEvent, render, within, screen, cleanup} from "@testing-library/react";
import Filter from "./Filter";

describe('Dashboard filter component', () => {
    it('should invoke onChange with dashboard type value', () => {
        var index = 1;
        const mockClick = jest.fn();
        const values = ['VISUALIZATION', 'MAP', 'TEXT']
        render(<Filter onChange={mockClick}/>)
        fireEvent.mouseDown(screen.getByRole('combobox'));
        const listbox = within(screen.getByRole('listbox'));
        values.forEach((item) => {
            fireEvent.click(listbox.getByText(new RegExp(item, "i")));
            const {calls} = mockClick.mock;
            expect(mockClick).toHaveBeenCalled()
            expect(mockClick).toHaveBeenCalledTimes(index)
            expect(calls[index - 1][0]).toBe(item)
            index++
        })
    })
    it('should display the filter keyword',()=>{
        var index = 1;
        const mockClick = jest.fn();
        const values = ['VISUALIZATION', 'MAP', 'TEXT']
        values.forEach((item) => {
            render(<Filter onChange={mockClick} filter={item}/>)
            expect(screen.getByRole('combobox').innerHTML).toBe(item);
            cleanup()
        })
    })
});