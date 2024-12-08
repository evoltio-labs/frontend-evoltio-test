import React from 'react';
import './App.css';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <h1>Base Project</h1>
      <p>
        This is a starting point for your coding test. Modify this code as needed
        to fulfill the requirements.
      </p>
      <PostList />
    </div>
  );
}

export default App;
