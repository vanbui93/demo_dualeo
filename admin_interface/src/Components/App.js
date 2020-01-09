import React from 'react';
import './App.css';
import Sidebar from './MenuSidebar/Sidebar';
import MainContent from './MainContent/MainContent';
import { connect } from 'react-redux';


class App extends React.Component {
  render() {
    return (
      <div id="react-app" className="App">
        <div className="main-content--block">
          <Sidebar/>
          <MainContent/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit : state.isEdit
  }
}

export default connect(mapStateToProps)(App);