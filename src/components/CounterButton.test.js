import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";

it('expect to render CounterButton component', () => {
    const mockColor = 'red';
    expect(shallow(<CounterButton color={mockColor}></CounterButton>)).toMatchSnapshot();
});
it('correctly increments counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor}></CounterButton>);
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count:2});
})