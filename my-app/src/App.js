import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Main from './components/pages/main/main';
import About from './components/pages/about/about';
import Labeling from './components/pages/labeling/labeling';
import ScrollToTop from './components/common/scrollToTop';



function App() {
  return (
     <BrowserRouter>
      <ScrollToTop>
           <Switch>
               <Route path="/about" component={About} />
               <Route exact path="/" component={Main} />
               <Route path="/news" component={About} />
               <Route path="/faq" component={Main} />
               <Route path="/contacts" component={Main} />
               <Route path="/labeling" component={Labeling} />
           </Switch>
        </ScrollToTop>
     </BrowserRouter>
  );
}

export default App;
