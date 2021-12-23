import React from 'react'
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import './Post.css';

function Post() {
    return (
        <PostBody>
            <PostHeader>
                <Avatar
                className="post_avatar" 
                alt='username'
                src='https://lh3.googleusercontent.com/proxy/lHxVo9E7nJ28puugD1rJtLCCuVBrN1Lv9d1YJuWOW6-gH1PBgpkhSHaVH_uRL9kBX7Xt6pD52VAwlTgGr5zVP7yL_LDpBxsVMW1ET9cu0or8Kw3hhbDX2q270ZENs_ZkMEMuad6g' 
                />
                <h3>UserName</h3>
            </PostHeader>
            <PostImg src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png' alt=''></PostImg>

            <PostText><strong>Username:</strong> Caption Lorum Ipsum Dolor</PostText>

        </PostBody>
    )
}

const PostBody = styled.div`

`;

const PostHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`;

const PostImg = styled.img`
    width: 100%;
    object-fit: contain; 
`;

const PostText = styled.a`
    font: normal;
`;

export default Post
