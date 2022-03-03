import { shallow } from "enzyme";
import React from "react";
import Header from './Header';

it('expect to render Header component', () => {
    expect(shallow(<Header></Header>).length).toEqual(1)
});
it('take snap of Header component', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
});