import React from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './style.css';
import ProductPage from './components/ProductPage';

const App = () => {


  return (
    <div className="main-container">
        <header>
            <h1>XXXMuck</h1>
        </header>
    <Routes>
<Route path='/' element={<HomePage />}></Route>
<Route path='/product:productId' element={<ProductPage />}></Route>
<Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
</Routes>
 </div>  
  );
};

createRoot(
  document.querySelector('#app'),
).render(
<BrowserRouter>
<App />
</BrowserRouter>);
