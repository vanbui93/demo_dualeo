import React, { Component } from 'react'
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import FormEdit from './../MainContent/FormEdit';
import FormAdd from './../MainContent/FormAdd';
import MainContent from '../MainContent/MainContent';

export default class DieuHuongUrl extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component = {MainContent}/>
        <Route exact path="/admin" component = {MainContent}/>
        <Route exact path="/admin/products" component = {MainContent}/>
        <Route path="/admin/add" component = {FormAdd} />
        <Route path="/admin/edit" component = {FormEdit}/>
      </div>
    )
  }
}