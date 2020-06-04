import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  useEffect,
} from 'react-router-dom';
import ScrollToTop from './components/utilities/ScrollToTop';
import './assets/css/amh-header.css';
import './assets/css/ai-media.css';
import './assets/css/ai-google-fonts.css';
import './assets/css/header.css';
import Home from './pages/Home';
import Estates from './pages/Estates';
import NavBarMenu from './components/NavBarMenu';
import Footer from './components/Footer';
import Test from './pages/Test.js';
import blank from './pages/blank.js';
import PagesState from './context/pages/PagesState';
import ListingList from './pages/ListingList';
import Property from './pages/Property';

import 'materialize-css/dist/css/materialize.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styled from 'styled-components';

const AppContainer = styled.section`
  /* position: relative;
  width: 100%;
  height: 100vh;
  -ms-scroll-snap-type: y mandatory;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll; */
`;

const App = () => {
  return (
    <AppContainer className='App'>
      <PagesState>
        <Router>
          <ScrollToTop />
          <NavBarMenu />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/estates' component={Estates} />
            <Route path='/test' component={Test} />
            <Route path='/properties/:slug' component={Property} />
            <Route path='/listing-list/:page' component={ListingList} />
            <Route exact path='/page-not-found' component={blank} />
            <Route component={blank} />
          </Switch>
          <Footer />
        </Router>
      </PagesState>
    </AppContainer>
  );
};

export default App;
