import React from "react";

import CardList from '../cardlist/CardList';
import SearchBox from '../searchbox/SearchBox';
import Scroll from '../scroll/Scroll';
import ErrorBoundry from '../ErrorBoundry';
import Header from '../header/Header';

import './MainPage.css';

class MainPage extends React.Component{
    componentDidMount() {
        this.props.onRequestRobots();
    }
    filteredRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
        })
    }
    checkPending = () => {
        return this.props.isPending
    }
    render() {
        const { onSearchChange, isPending } = this.props;
        return (
            <div className='tc'>
            <Header />
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                { this.checkPending() ? <h1>Loading</h1> :
                <ErrorBoundry>
                    <CardList robots={this.filteredRobots()} />
                </ErrorBoundry>
                }
            </Scroll>
            </div>
        );
    }
}
export default MainPage;