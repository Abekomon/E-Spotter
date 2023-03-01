import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import EventGrid from '../EventGrid/EventGrid';
import EventInfo from '../EventInfo/EventInfo';
import Loader from '../Loader/Loader';
import getEventInfo from '../../apiCalls';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      allData: [],
      favData: []
    }
  }

  getCurrentEvent = (id) => {
    return this.state.allData.find(eve => eve.id === id)
  }

  componentDidMount() {
    getEventInfo('').then(data => {
      console.log(data)
      this.setState({allData: data})
    })
  }

  render() {
    return (
      <>
        <Header />
        {this.state.allData.length ? <Switch>
          <Route exact path="/"
            render={() => (
              <EventGrid data={this.state.allData} />
            )}
          />
          <Route exact path="/favorites"
            render={() => (
              <h2>Favorites View</h2>
            )}
          />
          <Route exact path="/event/:id"
            render={({match}) => (
              <EventInfo event={this.getCurrentEvent(parseInt(match.params.id))} />
            )}
          />
          <Route 
            render={() => (
              <h2>Error View</h2>
            )}
          />
        </Switch> : <Loader />}
      </>
    )
  }

}

export default App;
