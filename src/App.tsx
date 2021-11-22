import { useState } from 'react';
import './App.css';
import ReviewForm, { Comment } from './components/ReviewForm';

const App = function App() {
  const [latestComments, setLatestComments] = useState<Comment[]>([]);

  console.log(latestComments);

  return (
    <div className="App">
      <h1>Rate this product</h1>
      <ReviewForm setLatestComments={setLatestComments} />
    </div>
  );
};

export default App;
