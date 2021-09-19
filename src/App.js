import React from 'react';

// Components
import Header from './components/Header';
import Home from './components/Home';

// style
import { GlobalStyle } from './GlobalStyle';
import PrecticeFile from './PrecticeFile';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
      {/* <PrecticeFile /> */}
    </div>
  );
}

export default App;
