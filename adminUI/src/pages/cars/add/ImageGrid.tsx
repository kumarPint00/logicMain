import { Grid, Typography } from '@mui/material';
import { useState } from 'react';

const ImageGrid = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImages((prevImages) => [...prevImages, file]);
    } else {
      setImages([]);
    }
  };

  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <img src={URL.createObjectURL(image)} alt="Image" />
        </Grid>
      ))}
      <Grid item xs={12} sm={6}>
        <input type="file" onChange={handleImageUpload} />
      </Grid>
    </Grid>
  );
};

export default ImageGrid;