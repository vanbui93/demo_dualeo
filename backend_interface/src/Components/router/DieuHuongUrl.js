import React, { Component } from 'react'
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import FormEdit from './../MainContent/FormEdit';
import FormAdd from './../MainContent/FormAdd';
import MainContent from '../MainContent/MainContent';
import { matchPath } from "react-router";
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();


export default class DieuHuongUrl extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component = {MainContent}/>
        <Route exact path="/admin" component = {MainContent}/>
        <Route exact path="/admin/products" component = {MainContent}/>
        <Route exact path="/admin/add" component = {FormAdd} />
        <Route exact={false} path="/admin/edit/:id" component = {FormAdd} history={customHistory}/>
        
        {/* <Route  exact={false}  path="/admin/edit/:id"  render={({ match,history }) => <FormAdd match ={match}/> } */}
    />

        
      </div>
    )
  }
}