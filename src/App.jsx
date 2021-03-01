import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import { Home } from './home'
import List from './list/List'
export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/list' component={List}></Route>
        <Redirect from='/' to="/home"></Redirect>
      </Switch>
    )
  }
}

