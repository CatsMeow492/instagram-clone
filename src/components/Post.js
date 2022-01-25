import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import './Post.css';

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
            <div className="post__text"><strong>{username}</strong> {caption}</div>

        </div>
    )
}

export default Post;
