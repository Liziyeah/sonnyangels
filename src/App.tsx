import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProductCarousel from './components/ProductCarousel';
import Products from './components/Products';
import Stores from './components/Stores';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

function App() {
  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      <Cursor />
      <Header />
      <main>
        <Hero />
        <About />
        <ProductCarousel />
        <Products />
        <Stores />
      </main>
      <Footer />
    </div>
  );
}

export default App;