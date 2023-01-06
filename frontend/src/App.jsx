import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import React from 'react';
import Home from './pages/Home';
import EditProfile from './pages/EditProfile';
import Auth from './pages/Auth';
import Guest from './pages/Guest';
import PrivateRoutes from './components/PrivateRoutes';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

const App = () => {
  return (
    <GlobalProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: '1.8rem',
          },
        }}
      />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
        <Route path="/guest" element={<Guest />} />
      </Routes>
    </GlobalProvider>
  );
};

export default App;
