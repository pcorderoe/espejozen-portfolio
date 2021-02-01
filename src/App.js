import * as React from 'react'
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Context } from './shared/app.context.js'
import Home from './home/home.page';




const App = () => {
  return (
    <Context>
      <BrowserRouter>
        <Switch>
          <Route to='/' exact component={Home} />
        </Switch>
      </BrowserRouter>
    </Context>
  )
}
export default App