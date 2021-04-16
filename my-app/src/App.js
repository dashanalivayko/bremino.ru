import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Main from './components/pages/main/main';
import About from './components/pages/about/about';



function App() {
  return (
     <BrowserRouter>
        <Switch>
            <Route path="/about" component={About} />
            <Route exact path="/" component={Main} />
            <Route path="/news" component={Main} />
            <Route path="/faq" component={Main} />
            <Route path="/contacts" component={Main} />
        </Switch>
     </BrowserRouter>
  );
}

export default App;
