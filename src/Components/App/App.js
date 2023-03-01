import React, {Component} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import EventGrid from '../EventGrid/EventGrid';
import Header from '../Header/Header';
import getEventInfo from '../../apiCalls';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      allData: [],
      renderData: []
    }
  }

  componentDidMount() {
    getEventInfo('').then(data => {
      this.setState({allData: data, renderData: data})
    })
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/"
            render={() => (
              <EventGrid data={this.state.renderData} />
            )}
          />
            
          
        </Switch>
      </>
    )
  }

}

export default App;
