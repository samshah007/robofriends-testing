import React, { Component } from 'react';
import { connect } from 'react-redux';
import { apiCall } from '../api/api';
import { setSearchField, requestRobots } from '../redux/actions/actions';

import MainPage from '../components/mainpage/MainPage';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  render() {
    return (
      <MainPage { ...this.props }></MainPage>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
