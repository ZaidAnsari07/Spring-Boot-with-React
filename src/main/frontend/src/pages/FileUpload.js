import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [responseData, setResponseData] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
    
        if (file) {
            if (file.type === 'image/jpeg') {
                if (file.size <= 1 * 1024 * 1024) {
                    setSelectedFile(file);
                } else {
                    alert('Please select a JPG image that is 1MB or smaller.');
                }
            } else {
                alert('Please select a valid JPG image.');
            }
        }
    };
    

    const handleFileUpload = () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            axios.post('http://localhost:8080/api/image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then((response) => {
                setResponseData(response)
            }).catch((error) => {

                if(error.message == 'Request failed with status code 500'){

                    setResponseData(null)
                    setSelectedFile(null)
                    const successPageUrl = 'http://localhost:8080/servererror';
                    window.location.href = successPageUrl
                }
            });

            if (responseData && responseData.status == 200) {
                setResponseData(null)
                setSelectedFile(null)
                const serverErrorPageUrl = 'http://localhost:8080/success';
                window.location.href = serverErrorPageUrl
            }
            else if (responseData && responseData.status == 500) {
                setResponseData(null)
                setSelectedFile(null)
                const successPageUrl = 'http://localhost:8080/servererror';
                window.location.href = successPageUrl
            } else {
                setSelectedFile(null)
                setResponseData(null)
            }
            alert("File uploaded successfully.......")

        }
    };

    return (
        <div>
            <h2>Image Upload (JPG Only)</h2>
            <label className="custom-file-input">
                <input
                    type="file"
                    accept="image/jpeg, image/jpg"
                    onChange={handleFileChange}
                />
            </label>

            {selectedFile && (
                <div>
                    <p>Selected JPG or JPEG File: {selectedFile.name}</p>
                    <img src={URL.createObjectURL(selectedFile)} alt="Selected Image" />
                    <button onClick={handleFileUpload}>Upload</button>
                </div>
            )}
        </div>
    );
}

export default ImageUpload;
