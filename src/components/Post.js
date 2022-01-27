import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import './Post.css';
import { db } from '../firebase'

function Post({ postId, username, caption, imageUrl }) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState([]);

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

    const postComment = (event) => {

    }

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

            <div className="post__comments">
                {comments.map((comment) => (
                    <p>
                        <strong>{comment.username}</strong> {comment.text}
                    </p>
                ))}
            </div>

            <form className="post__commentBox">
                <input
                    className="post__input"
                    type="text"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e) => setComments(e.target.value)}
                    />
                <button 
                    disabled={!comment}
                    className="post__button"
                    type="submit"
                    onClick={postComment}
                >
                    Post
                </button>
            </form>

        </div>
    )
}

export default Post;
