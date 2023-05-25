import React from 'react';
import './App.css';
import FormData from './components/FormData';
import PostList from './components/PostList';

function App() {
  return (
    <div className="container">
      <h1>Create Todos</h1>      
      <FormData /> 
      <hr />
      <PostList/> 
            
    </div>
  );
}

export default App;
