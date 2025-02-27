import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './features/home/Home';
import RecipeDetail from './features/recipe/RecipeDetail';
import Footer from './features/home/Footer';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipe/:id' element={<RecipeDetail />} />
        </Routes>
      </Router>
      <Footer />

    </div>


  );
}

export default App;
