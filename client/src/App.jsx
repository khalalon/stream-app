import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import ProtectedPage from './Protected';
<<<<<<< HEAD

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/protected" element={<ProtectedPage />} />
        <Route path="/register" element={<Register />} />
          
      </Routes>
=======
import Navbar from './Layout/Navbar';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
       <Navbar />
       <div style={{ paddingTop: '80px' }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/protected" element={<ProtectedPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<div>Events</div>} />
        <Route path="/rankings" element={<div>Rankings</div>} />
        <Route path="/athletes" element={<div>Athletes</div>} />
        <Route path="/news" element={<div>News</div>} />
        <Route path="/tuf32" element={<div>TUF 32</div>} />
      </Routes>
      </div>
>>>>>>> 591f082bba4d7aef00d03a72994066cbfce90f19
    </Router>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 591f082bba4d7aef00d03a72994066cbfce90f19
