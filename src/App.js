import React from 'react'
import HomePage from './components/home/HomePage'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import ChallengePage from './components/challenge/ChallengePage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/challenge' component={ChallengePage} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  )
}

export default App
