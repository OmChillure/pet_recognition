import React, { useState } from "react";
import axios from "axios";

const ImageClassifier = () => {
  const [result, setResult] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await axios.post('http://localhost:5000/classify', formData);
        setResult(response.data);
      } catch (error) {
        console.error('Error classifying image:', error);
      }
    }
  };

  return (
    <div>
      <h2>Image Classification Page</h2>
      <input type="file" onChange={handleImageUpload} />
      {result && (
        <div>
          <p>Class: {result.class}</p>
          <p>Confidence: {result.confidence}</p>
        </div>
      )}
    </div>
  );
};

export default ImageClassifier;
