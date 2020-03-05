import React from 'react';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import './App.css';
import Sidebar from './MenuSidebar/Sidebar';
import { connect } from 'react-redux';
import DieuHuongUrl from './router/DieuHuongUrl';
import FormEdit from './MainContent/FormEdit';

class App extends React.Component {
 
  hienThiFrom = () => {
    if(this.props.isEdit){
      return <FormEdit/>
    } else {
      return <DieuHuongUrl/>
    }
  }

  render() {
    return (
      <Router>
        <div id="react-app" className="App">
          <div className="main-content--block">
            <Sidebar/>
            {this.hienThiFrom()}
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit : state.isEdit
  }
}

export default connect(mapStateToProps)(App);