import React, { useState } from 'react'
import { Button } from '@material-ui/core'

function ImageUpload() {
    const [image, setImage] = useState('');
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {

    }

    return (
        <div>
            {/* I want to have ... */}
            {/* some kind of caption input */}
            {/* some kind of file picker */}
            {/* Post button */}
            <input type='text' placeholder='Enter a caption..' onChange={event => setCaption(event.target.value)} value={caption} />
            <input type='file' onChange={handleChange} />
            <Button onClick={handleUpload}>Upload</Button>
        </div>
    )
}

export default ImageUpload
