import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom'
import Home from './Home';
import Creatures from './Creatures'
import unicornData from './data/unicorn-data';
import sharkData from './data/shark-data'
import puppiesData from './data/puppy-data'
import CreatureDetails from './CreatureDetails'

import './App.css';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <header>
          {/* <NavLink to="/" className="nav">Home</NavLink> */}
          <NavLink to="/unicorns" key='' className="nav">Unicorns</NavLink>
          <NavLink to="/puppies" className="nav">Puppies</NavLink>
          <NavLink to="/sharks" className="nav">Sharks</NavLink>
        </header>
        <Route exact path='/' component= { Home } />
        <Route exact path='/unicorns' key='' render= { () => <Creatures data={unicornData} /> }/>
        <Route exact path='/sharks' render= { () => <Creatures data={sharkData} /> }/>
        <Route exact path='/puppies' render= { () => <Creatures data={puppiesData} /> }/>
        <Route path='/unicorns/:id' render={({match}) => {
          const foundCreature = unicornData.find(unicorn => unicorn.id == match.params.id)
          return <CreatureDetails id={foundCreature.id} name={foundCreature.name} image={foundCreature.image} bio={foundCreature.bio} type={foundCreature.type}/>
        }} />        
        <Route path='/puppies/:id' render={({match}) => {
          const foundCreature = puppiesData.find(puppy => puppy.id == match.params.id)
          return <CreatureDetails id={foundCreature.id} name={foundCreature.name} image={foundCreature.image} bio={foundCreature.bio} type={foundCreature.type}/>
        }} />
        <Route path='/sharks/:id' render={({match}) => {
          const foundCreature = sharkData.find(shark  => shark.id == match.params.id)
          return <CreatureDetails id={foundCreature.id} name={foundCreature.name} image={foundCreature.image} bio={foundCreature.bio} type={foundCreature.type}/>
        }} />
      </main>
    );
  }
}

// <Route path='/:creature/:id' render={({match}) => {
//   const { id, creature } = match.params
//   const foundCreature = sharkData.find(shark  => shark.id == match.params.id)
//   return <CreatureDetails id={foundCreature.id} name={foundCreature.name} image={foundCreature.image} bio={foundCreature.bio} type={foundCreature.type}/>
// }} />
