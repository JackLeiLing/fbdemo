import React, { Component } from 'react';
import Tabs from './components/tabs/tabs';
import './index.css';
import Header from './components/header/header.js';
class App extends Component {
  items = [
    { name: 'Panels', content: "All about panels", color: "orange", icon: "grid_on" },
    { name: 'Installers', content: "All about Installers", color: "yellow", icon: "group" },
    { name: 'Brands', content: "All about Brands", color: "green", icon: "branding_watermark" },
    { name: 'Frauds', content: "All about Frauds, fdlksaf al fdlsajf ldsjaf dsjalf dlskajf dlskja fjdsal fdjsla fldksja fjd", color: "purple", icon: "mood_bad" },
  ];
  render() {
    return (
      <div>
        <Header />
        <Tabs items={this.items}></Tabs>
        <Tabs items={this.items}></Tabs>
      </div>
    );
  }
}

export default App;
