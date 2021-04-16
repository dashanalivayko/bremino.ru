import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Main from './components/pages/main/main';
import Services from './components/pages/main/services/services';



function App() {
  return (
     <BrowserRouter>
        <Switch>
            <Route path="/about" component={Main} />
            <Route exact path="/" component={Main} />
            <Route path="/news" component={Services} />
            <Route path="/faq" component={Main} />
            <Route path="/contacts" component={Main} />
        </Switch>
     </BrowserRouter>
  );
}

export default App;
