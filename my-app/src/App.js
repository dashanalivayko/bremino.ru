import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Main from './components/main/main';



function App() {
  return (
     <BrowserRouter>
        <Switch>
            <Route path="/about" component={Main} />
            <Route exact path="/" component={Main} />
            <Route path="/news" component={Main} />
            <Route path="/faq" component={Main} />
            <Route path="/contacts" component={Main} />
        </Switch>
     </BrowserRouter>
  );
}

export default App;
