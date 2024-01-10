import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import PlaneDetails from './pages/home/PlaneDetails';
import NotFound from './pages/not-found/NotFound';

function App() {
  return (
    <div className='font-[Quicksand] bg bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen'>
      <Router>
        <Header />
        <div className='main-container'>
          <Routes>
            <Route index element={<Home />} />
            <Route path='create' element={<Create />} />
            <Route path='planes/:id' element={<PlaneDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
