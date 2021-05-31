import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Main from './components/pages/main/main';
import About from './components/pages/about/about';
import Labeling from './components/pages/labeling/labeling';
import ScrollToTop from './components/common/scrollToTop';
import Warehouses from './components/pages/warehouses/warehouses';
import CrossDocking from './components/pages/cross-docking/cross-docking';
import Transport from './components/pages/transport/transport';
import Avia from './components/pages/avia/avia';
import Additional from './components/common/additional/additional';
import Lablingdm from './components/pages/labeling/lablingdm/lablingdm';



function App() {
  return (
     <BrowserRouter>
      <ScrollToTop>
           <Switch>
               <Route path="/about" component={About} />
               <Route exact path="/" component={Main} />
               <Route path="/expeditors" component={About} />
               <Route path="/importers" component={About} />
               <Route path="/exporters" component={About} />
               <Route path="/faq" component={Main} />
               {/* <Route path="/contacts" component={Main} /> */}
               <Route path="/labeling" component={Labeling} />
               <Route path="/warehouses" component={Warehouses} />
               <Route path="/alco-labling" component={About} />
               <Route path="/cross-docking" component={CrossDocking} />
               <Route path="/transportnie-uslugi" component={Transport} />
               <Route path="/avia" component={Avia} />
               <Route path="/additional" component={Additional} />
               <Route path="/data-matrix" component={Lablingdm} />

               <Route path="/warehousing" component={Labeling} />
               <Route path="/labling" component={Labeling} />
               <Route path="/cross-docking" component={Labeling} />
               <Route path="/transportnie-uslugi" component={Labeling} />
               <Route path="/warehousing" component={Labeling} />
               <Route path="/labling" component={Labeling} />
               <Route path="/cross-docking" component={Labeling} />
               <Route path="/transportnie-uslugi" component={Labeling} />
               <Route path="/warehousing" component={Labeling} />
               <Route path="/labling" component={Labeling} />
               <Route path="/cross-docking" component={Labeling} />
               <Route path="/transportnie-uslugi" component={Labeling} />
               <Route path="/transportnie-uslugi" component={Labeling} />
               <Route path="/transportnie-uslugi" component={Labeling} />
           </Switch>
        </ScrollToTop>
     </BrowserRouter>
  );
}

export default App;
