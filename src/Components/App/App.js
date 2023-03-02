import React, {Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Header from '../Header/Header';
import EventGrid from '../EventGrid/EventGrid';
import EventInfo from '../EventInfo/EventInfo';
import Favorites from '../Favorites/Favorites';
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

  addToFavorites = (id) => {
    const findEvent = this.state.allData.find(eve => eve.id === id)
    if (!this.state.favData.includes(findEvent)){
      this.setState({favData: [...this.state.favData, findEvent]})
    }
  }

  removeFromFavorites = (id) => {
    const filteredData = this.state.favData.filter(eve => eve.id !== id)
    this.setState({favData: filteredData})
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
        <Switch>
          <Route exact path="/"
            render={() => (
              this.state.allData.length ? 
              <>
                <Link to="/favorites">See Favorites</Link>
                <EventGrid 
                  data={this.state.allData} 
                  removeFromFavorites={this.removeFromFavorites} 
                  addToFavorites={this.addToFavorites}
                />
              </>
              : <Loader />
            )}
          />
          <Route exact path="/favorites"
            render={() => (
              <Favorites 
                data={this.state.favData} 
                removeFromFavorites={this.removeFromFavorites} 
                addToFavorites={this.addToFavorites} 
              />
            )}
          />
          <Route exact path="/event/:id"
            render={({match}) => (
              <EventInfo 
                addToFavorites={this.addToFavorites} 
                event={this.getCurrentEvent(parseInt(match.params.id))} 
              />
            )}
          />
          <Route 
            render={() => (
              <h2>Error View</h2>
            )}
          />
        </Switch>
      </>
    )
  }

}

export default App;
