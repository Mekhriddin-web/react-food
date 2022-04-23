import React from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
