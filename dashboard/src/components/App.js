import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Contents from './Contents';
import {connect} from 'react-redux';

class App extends Component {
     render(){
    return (
      <div className="body">
        <Sidebar/>
        <div className="bodyWrapper">
          <Header/>
          <Contents />
        </div>
      </div>);
  }
}
const mapStateToProps = (state)=>{ 
  return {reduxStateAsProp: state }
  }
const mapDispatchToProps = {}

export default connect(mapStateToProps , mapDispatchToProps)(App);

