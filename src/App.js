import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Coindetail from './components/Coindetail';
import Home from './components/Home';
import NavBar from './components/navbar/NavBar';
import CoinId from './components/CoinId';
import { setDetails } from './components/ContextAPI/DetailContext';

function App() {
  const [currency, setCurrency] = useState('');
  const setCurr = useCallback(curr => {
    setCurrency(curr);
  }, []);

  return (
    <Router>
      <setDetails.Provider value={{ currency: currency, setCurr: setCurr }}>
        <NavBar />
        <Routes>
          <Route path="/coins" element={<Coindetail />} exact />
          <Route path="/" element={<Home />} exact />
          <Route path="/:id" element={<CoinId />} exact />
        </Routes>
      </setDetails.Provider>
    </Router>
  );
}

export default App;
