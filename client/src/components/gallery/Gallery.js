import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import './ImageGallery.css';

const Gallery = () => {
  const images = [
    { id: 1, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr0ICm0KUnit7myrQ7tzmk-S2adBUBV0GKhS3v2XPw6g&s', alt: 'Image 1' },
    { id: 2, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-GfqBDl2sF7jBUbF3geH84DBB3uVlP_qdRNGh-6Bmw&s', alt: 'Image 2' },
    { id: 3, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGdoa-i1DWhziT0hiiObSH35ui-OXQ0V6NYES1BXHwg&s', alt: 'Image 3' },
    { id: 4, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMHgNfWvVvfErlLbCZi4u-LK4GJo6DpaRxyK7K5Q9Tg&s', alt: 'Image 4' },
    { id: 5, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTid8hEDNd8TNFVyydJMKhMP7GC2k9GjMWOxYFcDrTjLQ&s', alt: 'Image 5' },
    { id: 6, url: 'https://media.collegedekho.com/media/uploads/2016/01/25/anwesha-iit-patna-2.jpg', alt: 'Image 6' },
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (id) => {
    if (selectedImage === id) {
      setSelectedImage(null);
    } else {
      setSelectedImage(id);
    }
  };

  return (
    <div style={{ marginTop: '70px', }}>
      <h1 style={{ textAlign: 'center' ,marginTop: '75px', fontSize: '250%', color: '#1C1899' }}> Image Gallery</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image) => (
          <div key={image.id} className={`image-container ${selectedImage === image.id ? 'enlarged' : ''}`} onClick={() => handleImageClick(image.id)}>
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;
