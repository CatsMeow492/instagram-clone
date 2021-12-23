import React from 'react'
import styled from 'styled-components';

function Post() {
    return (
        <div>
            <h3>UserName</h3>
            {/* header -> avatar + username */}
            <PostImg></PostImg>
            {/* image */}

            {/* username + caption */}

            <h1>Hello World</h1>

        </div>
    )
}

const PostImg = styled.img`
`;

export default Post
