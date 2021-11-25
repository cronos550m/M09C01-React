import React from 'react';
import './assets/css/app.css';
import ContentWrapper from './assets/components/ContentWrapper';
import SideBar from './assets/components/SideBar';
import Encabezado from './assets/components/Encabezado';

function App() {
  return (
    <div className="App">
      <div lang="es">
        <Encabezado />
        <div id="wrapper">
        <SideBar />
        <ContentWrapper />
        </div>
      </div>
    </div>
  );
}

export default App;
