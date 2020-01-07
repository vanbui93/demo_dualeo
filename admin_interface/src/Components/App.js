import React from 'react';
import './App.css';
import Sidebar from './MenuSidebar/Sidebar';
import MainContent from './MainContent/MainContent';
import axios from 'axios';
import Product from './MainContent/Product';
import { connect } from 'react-redux';
// get data product from postgres
const getProductData = () => axios.get('/getproduct').then((response) => response.data)
  .catch((error) => { console.log(error.response); return Promise.reject(error.response)})

class App extends React.Component {

  UNSAFE_componentWillMount() {
    getProductData().then((res) =>{
      this.setState({
        data:res
      })
    })
  }

  // In dữ liệu trong api sau khi nhận được ra
  printData = () => {
    if(this.state.data !== null){
      return this.state.data.map((value,key) => (
        <Product key={key}
        product_name={value.product_name}
        product_image={value.product_image}
        />
      ))
    } 
  }

  
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


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editState: () => {
      dispatch({type:"Change_editState"})
    }
  }
}




export default connect(mapDispatchToProps)(App);