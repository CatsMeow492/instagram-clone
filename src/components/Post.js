import React from 'react'
import styled from 'styled-components';

function Post() {
    return (
        <div>
            <h3>UserName</h3>
            {/* header -> avatar + username */}
            <PostImg src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png' alt=''></PostImg>
            {/* image */}
            
            {/* username + caption */}

            <PostText><strong>Username:</strong> Caption Lorum Ipsum Dolor</PostText>

        </div>
    )
}

const PostImg = styled.img`
    width: 100%;
    object-fit: contain; 
`;

const PostText = styled.a`
`;

export default Post
