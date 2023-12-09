import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../layout/Footer';
import Navbar from '../layout/Navbar';
import Navbar_menu from '../layout/NavbarMenu';
import axios from 'axios';

export default function PostDetails() {
    const { postId } = useParams();
    const [post, setPost] = useState('');

    useEffect(() => {
        if (postId) {
            axios
                .get(`http://localhost:8081/api/v1/findPostBy/${postId}`)
                .then(response => {
                    console.log('Post data:', response.data);
                    setPost(response.data);
                })
                .catch(error => {
                    console.error('Error fetching post data:', error);
                });
        }
    }, []);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />
            <Navbar_menu />

            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{post.timeAndPlace}, {post.rating}, {post.countPeople}</p>

            <Footer />
        </div>
    );
}