import React, { useState, useEffect } from 'react';
import Post from './Post';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://65e60da8d7f0758a76e8083a.mockapi.io/api/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="App">
      <h1>Instagram-like Social App</h1>
      <div className="posts-container">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default App;
