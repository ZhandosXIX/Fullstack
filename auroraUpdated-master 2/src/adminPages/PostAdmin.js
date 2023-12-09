import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AdminPanel from '../layout/AdminPanel';

export default function PostAdmin() {
  function Post(props) {
    return (
        <div className="container-row" style={{ background: '#FFFFFF', border: '1px solid #006BA8', width: '30%' }}>
          <h2 className='text-center'>{props.title}</h2>
          <p className='text-center'>{props.content}</p>
          <p>{props.timeAndPlace}, {props.rating}, {props.countPeople}</p>
          <button>Delete</button>
          <button>Update</button>
        </div>
    );
  }

  function PostList(props) {
    return (
        <div className='container'>
          {props.posts.map(post => (
              <Post
                  key={post.id}
                  title={post.title}
                  content={post.description}
                  countPeople={post.count}
                  timeAndPlace={post.timeAndPlace}
                  rating={post.ratingOfVolunteer}
              />
          ))}
        </div>
    );
  }

  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem('token');

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  useEffect(() => {
    axios.get('http://localhost:8081/api/v1/getUser', config)
        .then((response) => {
          console.log('user data', response.data);
          if (response.data.role === 'ADMIN') {
            axios.get('http://localhost:8081/api/v1/getAllPosts', config)
                .then((response) => {
                  setPosts(response.data);
                })
                .catch((error) => {
                  console.error('Error fetching posts data:', error);
                });
          } else {
            console.log('Error you dont have permission');
            window.location.replace('/');
          }
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  return (
      <div>
        <AdminPanel />
        <div className="container mt-5 mb-5">
          <PostList posts={posts} />
        </div>
        <div className="container mt-5 mb-5">
          <a href="/AddPost" className="btn btn-light" style={{ fontSize: '30px', color: '#006BA8', background: '#FFF', borderColor: '#006BA8' }}>Add post</a>
        </div>
      </div>
  );
}

