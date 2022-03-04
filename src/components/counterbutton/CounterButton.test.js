import { shallow } from "enzyme";
import React from "react";
import CounterButton from './CounterButton';

it('expect to render CounterButton component', () => {
    const mockColor = 'red';
    expect(shallow(<CounterButton color={mockColor}></CounterButton>)).toMatchSnapshot();
});
it('correctly increments counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor}></CounterButton>);
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count:1});
});
it('check for life cycle methode', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor}></CounterButton>);
    expect(wrapper.instance().shouldComponentUpdate(wrapper.state(),{count:0})).toEqual(false);
    expect(wrapper.instance().shouldComponentUpdate(wrapper.state(),{count:1})).toEqual(true);
});