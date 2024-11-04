import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      welcome:"Welcome to Fullstack Development - I",
      courseInfo:"React JS Programming Week 9 Lab Exercise",
      name: "Chhavi Chhabra",
      id: "101412182",
      college:"George Brown College, Toronto"
    }
  }
  
  render(){
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{this.state.welcome}</h1>
        <h2>{this.state.courseInfo}</h2>
        <h3>{this.state.id}</h3>
        <h4>{this.state.name}</h4>
        <h5>{this.state.college}</h5>
    </div>
  );
  }
}

export default App;
