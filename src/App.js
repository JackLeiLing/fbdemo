import React, { Component } from 'react';
import Tabs from './components/tabs/tabs';
import './index.css';
import Header from './components/header/header.js';
class App extends Component {
  items = [
    { name: 'Panels', content: "All about panels" },
    { name: 'Installers', content: "All about Installers" },
    { name: 'Brands', content: "All about Brands" },
    { name: 'Frauds', content: "All about Frauds" },
  ];
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
