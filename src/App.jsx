import './App.css';
import React from 'react';
import NavBar from './components/nav bar/navigation'; // Ensure this path is correct
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ManageAccount from './pages/Manage Account/ManageAccount'; // Import ManageAccount page

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manageaccount" element={<ManageAccount />} /> {/* Add this route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
