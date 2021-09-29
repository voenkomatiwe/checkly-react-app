import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import ChallengePage from '../challenge/challengePage'
import App from '../../App'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/challenge' component={ChallengePage} />
        <Redirect to='/'/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
