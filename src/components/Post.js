import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import './Post.css';

function Post({ username, caption, imageUrl }) {
    const [comments, setComments] = useState([]);

    return (
        <div className="post__body">
            <div className="post__header">
                <Avatar
                    className="post_avatar" 
                    alt='username'
                    src='imageUrl' 
                />
                <h3>{username}</h3>
            </div>
            <img className="post__img" src={imageUrl} alt='' />
            <div className="post__text"><strong>{username}</strong> {caption}</div>

        </div>
    )
}

export default Post;
