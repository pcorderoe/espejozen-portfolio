import React, { useContext } from 'react'
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { AppContext, Context } from './shared/app.context.js'
import Home from './home/home.page';
import { AppActions } from './shared/app.reducer.js';
import { AppService } from './shared/app.service.js';




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