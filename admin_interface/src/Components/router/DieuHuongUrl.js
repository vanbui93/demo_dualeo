import React, { Component } from 'react'
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import EditProduct from './../MainContent/EditProduct';
import MainContent from '../MainContent/MainContent';

export default class DieuHuongUrl extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component = {MainContent}/>
        <Route exact path="/admin" component = {MainContent}/>
        <Route exact path="/admin/products" component = {MainContent}/>
        <Route path="/admin/edit_products" component = {EditProduct}/>
      </div>
    )
  }
}