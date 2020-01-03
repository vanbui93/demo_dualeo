import React, { Component } from 'react'
import TopHead from './TopHead';
import ContentHead from './ContentHead';
import Nav from './Nav';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <TopHead/>
        <ContentHead/>
        <Nav/>
      </header>
    )
  }
}