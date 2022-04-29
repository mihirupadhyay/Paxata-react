import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import List from './List';

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
      axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
          console.log(res.data.length);
          setCount(res.data.length);
          console.log(res.data);
          setPosts(res.data);
          console.log(posts);
      })
      .catch(err =>{
          console.log(err)
      })
  }, []);

  function CreatePost(post){
      return (
        <List 
            key = {post.id}
            id = {post.id}
            title = {post.title}
        />
      );
  }

  return (
    <div>
     {posts.map(CreatePost)}
     <p>{count}</p>
    </div>
  )
}

export default DataFetching;