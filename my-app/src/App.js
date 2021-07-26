import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Main from './components/pages/main/main';
import About from './components/pages/about/about';
import labling from './components/pages/labling/labling';
import ScrollToTop from './components/common/scrollToTop';
import Warehouses from './components/pages/warehouses/warehouses';
import CrossDocking from './components/pages/cross-docking/cross-docking';
import Transport from './components/pages/transport/transport';
import Avia from './components/pages/avia/avia';
import Additional from './components/common/additional/additional';
import Lablingdm from './components/pages/labling/lablingdm/lablingdm';
import NotFound from './components/pages/notFound/notFound';
import ShoesDM from './components/pages/labling/lablingdm/shoes-dm';
import ParfumeDM from './components/pages/labling/lablingdm/parfume-dm';
import TireDM from './components/pages/labling/lablingdm/tire-dm';
import ClothesDM from './components/pages/labling/lablingdm/clothes-dm';
import MilkDM from './components/pages/labling/lablingdm/milk-dm';
import WaterDM from './components/pages/labling/lablingdm/water-dm';
import Lablingalco from './components/pages/labling/lablingalco/lablingalco';
import Excise from './components/pages/labling/lablingalco/excise';
import Suvenir from './components/pages/labling/lablingalco/suvenir';
import BeerCan from './components/pages/labling/lablingalco/beer-can';
import BeerGlass from './components/pages/labling/lablingalco/beer-glass';
import BeerKeg from './components/pages/labling/lablingalco/beer-keg';
import AlcoDrinks from './components/pages/labling/lablingalco/alco-drinks';
import WarehouseTS from './components/pages/warehouses/ts';
import WarehouseSVH from './components/pages/warehouses/svh';
import WarehouseSOP from './components/pages/warehouses/sop';
import WarehouseOPEN from './components/pages/warehouses/open';
import WarehouseCOLD from './components/pages/warehouses/cold';



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
               <Route path="/labling" component={labling} />

               <Route path="/alco-labling" component={Lablingalco} />
               <Route path="/excise" component={Excise} />
               <Route path="/suvenir" component={Suvenir} />
               <Route path="/beer-can" component={BeerCan} />
               <Route path="/beer-glass" component={BeerGlass} />
               <Route path="/beer-keg" component={BeerKeg} />
               <Route path="/alcodrinks" component={AlcoDrinks} />

               <Route path="/data-matrix" component={Lablingdm} />
               <Route path="/shoes-dm" component={ShoesDM} />
               <Route path="/water-dm" component={WaterDM} />
               <Route path="/clothes-dm" component={ClothesDM} />
               <Route path="/parfum-dm" component={ParfumeDM} />
               <Route path="/milk-dm" component={MilkDM} />
               <Route path="/tire-dm" component={TireDM} />

               <Route path="/stickers" component={NotFound} />
               {/* warehousing */}
               <Route path="/warehouses" component={Warehouses} />
               <Route path="/svh" component={WarehouseSVH} />
               <Route path="/ts" component={WarehouseTS} />
               <Route path="/sop" component={WarehouseSOP} />
               <Route path="/cold" component={WarehouseCOLD} />
               <Route path="/open" component={WarehouseOPEN} />
               {/* cross-docking */}
               <Route path="/cross-docking" component={CrossDocking} />
               {/* transport */}
               <Route path="/transportnie-uslugi" component={Transport} />
               {/* avia */}
               <Route path="/avia" component={Avia} />
               {/* additional */}
               <Route path="/additional" component={Additional} />
               
               <Route path="/usluga" component={NotFound} />

           </Switch>
        </ScrollToTop>
     </BrowserRouter>
  );
}

export default App;
