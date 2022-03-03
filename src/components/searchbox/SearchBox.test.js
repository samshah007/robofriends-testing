import { shallow } from "enzyme";
import React from "react";
import SearchBox from './SearchBox';

it('expect to render SearchBox component', () => {
    expect(shallow(<SearchBox></SearchBox>).length).toEqual(1)
});
it('take snap of SearchBox component', () => {
    expect(shallow(<SearchBox />)).toMatchSnapshot();
});