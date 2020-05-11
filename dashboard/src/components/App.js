import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import {connect} from 'react-redux';
import Content from './Content';
import Contents from './Contents';


class App extends Component {
     render(){
    return (
      <div className="body">
        <Sidebar/>
        <div className="bodyWrapper">
          <Header/>
          <Content />
          {/* <Contents /> */}
        </div>
      </div>);
  }
}
const mapStateToProps = (state)=>{ 
  return {reduxStateAsProp: state }
  }
const mapDispatchToProps = {}

export default connect(mapStateToProps , mapDispatchToProps)(App);

