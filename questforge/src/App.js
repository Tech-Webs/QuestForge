import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Perfil from './Telas/Perfil';
import Principal from './Telas/Principal';

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={
          <div>
            <Principal></Principal>
          </div>
        }>
        </Route>

        <Route path='/perfil' element={
          <div>
            <Perfil></Perfil>
          </div>
        }>
        </Route>

      </Routes>
    </Router>


  );
}

export default App;
