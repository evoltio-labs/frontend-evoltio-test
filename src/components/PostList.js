import React, { useEffect, useState } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading posts...</p>;

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {posts.slice(0, 10).map(post => (
        <li key={post.id} style={{ marginBottom: '20px' }}>
          <h3 style={{ margin: '0 0 5px' }}>{post.title}</h3>
          <p style={{ margin: 0 }}>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
