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
import NotFound from './components/pages/notFound/notFound';
import ShoesDM from './components/pages/labeling/lablingdm/shoes-dm';



function App() {
  return (
     <BrowserRouter>
      <ScrollToTop>
           <Switch>
               <Route path="/about" component={About} />
               <Route exact path="/" component={Main} />
               <Route path="/expeditors" component={NotFound} />
               <Route path="/importers" component={NotFound} />
               <Route path="/exporters" component={NotFound} />
               <Route path="/faq" component={NotFound} />
               {/* labling */}
               <Route path="/labeling" component={Labeling} />

               <Route path="/alco-labling" component={NotFound} />

               <Route path="/data-matrix" component={Lablingdm} />
               <Route path="/shoes-dm" component={ShoesDM} />
               <Route path="/water-dm" component={NotFound} />
               <Route path="/clothes-dm" component={NotFound} />
               <Route path="/parfum-dm" component={NotFound} />
               <Route path="/milk-dm" component={NotFound} />
               <Route path="/tire-dm" component={NotFound} />

               <Route path="/stickers" component={NotFound} />
               {/* warehousing */}
               <Route path="/warehouses" component={Warehouses} />

               <Route path="/svh" component={NotFound} />
               <Route path="/ts" component={NotFound} />
               <Route path="/sop" component={NotFound} />
               <Route path="/cold" component={NotFound} />
               <Route path="/open" component={NotFound} />
               {/* cross-docking */}
               <Route path="/cross-docking" component={CrossDocking} />
               {/* transport */}
               <Route path="/transportnie-uslugi" component={Transport} />
               {/* avia */}
               <Route path="/avia" component={Avia} />
               {/* additional */}
               <Route path="/additional" component={Additional} />
               
               <Route path="/usluga" component={NotFound} />



               <Route path="/labling" component={NotFound} />
               <Route path="/cross-docking" component={NotFound} />
               <Route path="/transportnie-uslugi" component={NotFound} />
               <Route path="/warehousing" component={NotFound} />
               <Route path="/labling" component={NotFound} />
               <Route path="/cross-docking" component={NotFound} />
               <Route path="/transportnie-uslugi" component={NotFound} />
               <Route path="/warehousing" component={NotFound} />
               <Route path="/labling" component={NotFound} />
               <Route path="/cross-docking" component={NotFound} />
               <Route path="/transportnie-uslugi" component={NotFound} />
               <Route path="/transportnie-uslugi" component={NotFound} />
               <Route path="/transportnie-uslugi" component={NotFound} />
           </Switch>
        </ScrollToTop>
     </BrowserRouter>
  );
}

export default App;
