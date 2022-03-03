import { shallow } from "enzyme";
import React from "react";
import Card from './Card';

it('expect to render Card component', () => {
    expect(shallow(<Card></Card>).length).toEqual(1)
});
it('take snap of Card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
});
