import React from 'react';
import CatsContainer from './containers/Cats.container';
import "./scss/App.view.scss";
require('dotenv').config()

function App() {
  return (
    <div>
      <CatsContainer/>
    </div>
  );
}

export default App;
