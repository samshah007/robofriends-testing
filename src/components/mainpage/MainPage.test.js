import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots:jest.fn(),
        isPending:false,
        searchField:'',
        robots:[]
    }
    wrapper = shallow(<MainPage { ...mockProps }></MainPage>)
});
it('expect to render MainPage component', () => {
    expect(wrapper).toMatchSnapshot()
});
it('filters robots correctly', () => {
    const mockProps = {
        onRequestRobots:jest.fn(),
        isPending:false,
        searchField:'a',
        robots:[{
            id:3,
            name:'Shyamal Shah',
            email:'sam@gmail.com'
        }]
    }
    expect(wrapper.instance().filteredRobots()).toEqual([]);
    const wrapper2 = shallow(<MainPage { ...mockProps}></MainPage>);
    expect(wrapper2.instance().filteredRobots()).toEqual([{
        id:3,
        name:'Shyamal Shah',
        email:'sam@gmail.com'
    }]);
});
it('check if isPending working', () => {
    const mockProps3 = {
        onRequestRobots:jest.fn(),
        isPending:true,
        searchField:'a',
        robots:[]
    }
    const wrapper3 = shallow(<MainPage { ...mockProps3}></MainPage>);
    expect(wrapper3.instance().checkPending()).toEqual(true);
});
