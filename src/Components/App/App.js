import React, {Component} from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Form from '../Form/Form';
import EventGrid from '../EventGrid/EventGrid';
import EventInfo from '../EventInfo/EventInfo';
import Favorites from '../Favorites/Favorites';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import getEventInfo from '../../apiCalls';
import dataCleaner from '../../utilities';
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      allData: [],
      favData: [],
      isLoading: 'true',
      selected: ""
    }
  }
  
  componentDidMount() {
    getEventInfo("")
    .then(data => {
      const cleanedData = data.map(event => {return dataCleaner(event)})
      this.setState({allData: cleanedData, isLoading: 'false'})
    }).catch(() => this.setState({isLoading: 'error'}))
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
  
  getCurrentEvent = (id) => {
    return this.state.allData.find(eve => eve.id === id)
  }
  
  updateEventData = (game) => {
    this.setState({allData: [], isLoading: 'true'})
    getEventInfo(game)
    .then(data => {
      const cleanedData = data.map(event => {return dataCleaner(event)})
      this.setState({allData: cleanedData, isLoading: 'false'})
    })
    .catch(() => this.setState({isLoading: 'error'}))
  }

  updateForm = (game) => {
    this.setState({selected: game})
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/"
            render={() => (
              this.state.isLoading === 'error' ? <Redirect to="/error" /> :
              <>
                <nav className="dashboard-nav">
                  <Form 
                    updateEventData={this.updateEventData} 
                    updateForm={this.updateForm}
                    curValue={this.state.selected} 
                  />
                  <Link className="nav-link" to="/favorites">See Favorites</Link>
                </nav>
              { this.state.isLoading === 'true' ? <Loader /> :
                this.state.allData.length ? 
                <EventGrid 
                  data={this.state.allData} 
                  addToFavorites={this.addToFavorites}
                /> : <h2 className="no-event-text">No Upcoming Events!</h2> }
              </>
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
              this.state.isLoading === 'error' ? <Redirect to="/error" /> :
              <EventInfo 
                addToFavorites={this.addToFavorites} 
                event={this.getCurrentEvent(parseInt(match.params.id))} 
              />
            )}
          />
          <Route exact path="/error" 
            render={() => (
              <Error />
            )}
          />
          <Route 
            render={() => (
              <div className="error-box">
                <h2>Huh, we can't seem to find that.</h2> 
                <Link className="error-link" to="/">&lt; Back to home</Link>
              </div>
            )} 
          />

        </Switch>
      </>
    )
  }
}