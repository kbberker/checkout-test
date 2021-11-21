import React from 'react';
import './App.css';

const App = function App() {
  return (
    <div className="App">
      <h1>Rate this product</h1>
      <form>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" />
        </label>
      </form>
    </div>
  );
};

export default App;
