import { shallow } from "enzyme";
import React from "react";
import Scroll from './Scroll'

it('expect to render Card component', () => {
    expect(shallow(<Scroll></Scroll>).length).toEqual(1)
});
it('take snap of Card component', () => {
    expect(shallow(<Scroll />)).toMatchSnapshot();
});