import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import FooterComponent from './components/Footer/Footer.component';
import HeaderComponent from './components/Header/Header.component';
import CatInformationContainer from './containers/CatInformation.container';
import CatsContainer from './containers/Cats.container';
import "./scss/App.view.scss";
require('dotenv').config()

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <Router>
          <Route exact path='/' component={CatsContainer}/>
          <Route path='/cats' component={CatsContainer}/>
          <Route path='/information' render={ props => <CatInformationContainer {...props} />}
        />
      </Router>
      <FooterComponent/>
    </div>
  );
}

export default App;
