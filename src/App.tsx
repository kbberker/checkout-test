import React from 'react';
import './App.css';
import ReviewForm from './components/ReviewForm';

const App = function App() {
  return (
    <div className="App">
      <h1>Rate this product</h1>
      <ReviewForm />
    </div>
  );
};

export default App;
