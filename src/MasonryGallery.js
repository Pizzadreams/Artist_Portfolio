import React from 'react';
import ArtworkItem from './ArtworkItem';

function MasonryGallery() {
  // Replace with actual artwork data
  const artworkData = [
    { id: 1, title: 'Artwork 1', imageUrl: 'path-to-image-1.jpg', description: 'Brief description of artwork 1' },
    { id: 2, title: 'Artwork 2', imageUrl: 'path-to-image-2.jpg', description: 'Brief description of artwork 2' },
    // Add more artwork items
  ];

  return (
    <div className="masonry-gallery">
      {artworkData.map((artwork) => (
        <ArtworkItem key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
}

export default MasonryGallery;
