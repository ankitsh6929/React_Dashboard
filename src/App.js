import React from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './App.css';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
};

export default App;
