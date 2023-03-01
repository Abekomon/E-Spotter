import React, {Component} from 'react';
import Header from '../Header/Header';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render() {
    return (
      <Header />
    )
  }

}

export default App;
