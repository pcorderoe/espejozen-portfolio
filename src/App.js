import React from 'react'
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Context } from './shared/app.context.js'
import Home from './home/home.page';
import About from './about/about.page.js';
import MyWork from './my-work/mywork.page.js';
import Blog from './blog/blog.page.js';
import Contact from './contact/contact.page.js';
import Resume from './resume/resume.page.js';
import NotFoundPage from './shared/ui/404.page.js';




const App = () => {
  return (
    <Context>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-me' exact component={About} />
          <Route path='/my-work' exact component={MyWork} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/contact-me' exact component={Contact} />
          <Route path='/my-resume' exact component={Resume} />
          <Route path='*' exact component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Context>
  )
}
export default App