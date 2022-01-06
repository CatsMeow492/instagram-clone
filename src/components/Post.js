import React, {useState} from 'react'
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import './Post.css';

function Post({ username, caption, imageUrl }) {

    

    return (
        <PostBody>
            <PostHeader>
                <Avatar
                className="post_avatar" 
                alt='username'
                src='imageUrl' 
                />
                <h3>{username}</h3>
            </PostHeader>
            <PostImg src={imageUrl} alt=''></PostImg>

            <PostText><strong>{username}</strong> {caption}</PostText>

        </PostBody>
    )
}

const PostBody = styled.div`
    max-width: 500px;
    background-color: white;
    border: 1px solid lightgray;
    margin-bottom: 45px;
`;

const PostHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`;

const PostImg = styled.img`
    min-width: 300px;
    min-height: 300px;
    width: 100%;
    height: 100%;
    object-fit: contain; 
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
`;

const PostText = styled.a`
    font: normal;
    padding: 20px;
`;

export default Post;
