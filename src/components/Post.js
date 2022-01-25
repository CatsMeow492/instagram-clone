import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import './Post.css';
import { db } from '../firebase'

function Post({ postId, username, caption, imageUrl }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        let unsubscribe;
        if(postId) {
            unsubscribe = db
                .collection('posts') // go to posts
                .doc(postId) // checkout specific post id
                .collection("comments") // go to comments
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) => doc.data())) // snapshot listener
                });
        }
        return () => {
            unsubscribe();
        };
    }, [postId]);

    return (
        <div className="post__body">
            <div className="post__header">
                <Avatar
                    className="post_avatar" 
                    alt='username'
                    src='avatarUrl' 
                />
                <h3>{username}</h3>
            </div>
            <img className="post__img" src={imageUrl} alt='' />
            <h4 className="post__text"><strong>{username}</strong> {caption}</h4>

            <form>
                <input
                    className="post__input"
                    type="text"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e) => setComments(e.target.value)}
                    />
            </form>

        </div>
    )
}

export default Post;
