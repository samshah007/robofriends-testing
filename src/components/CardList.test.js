import { shallow } from "enzyme";
import React from "react";
import CardList from './CardList';

const mockRobots = [{
    id:1,
    name:'Shyamal Shah',
    email:'sam@gmail.com'
}];
it('expect to render CardList component', () => {
    expect(shallow(<CardList robots={mockRobots}></CardList>).length).toEqual(1)
});
it('take snap of Card component', () => {
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});