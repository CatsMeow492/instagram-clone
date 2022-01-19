import React, { useState } from 'react'

function ImageUpload() {
    const [image, setImage] = useState('');
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('')
}

function ImageUpload() {
    return (
        <div>
            <h1>abc</h1>
            {/* I want to have ... */}
            {/* some kind of caption input */}
            {/* some kind of file picker */}
            {/* Post button */}
            <input type='text' placeholder='Enter a caption..' onChange={event => setCaption(event.target.value)} value={caption} />
            <input type='file' onChange={handleChanges} />
            <Button onClick={handleUpload}>Upload</Button>
        </div>
    )
}

export default ImageUpload
