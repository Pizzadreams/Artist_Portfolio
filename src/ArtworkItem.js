// ArtworkItem.js
import React from 'react';

function ArtworkItem({ artwork }) {
  const { title, imageUrl, description } = artwork;

  return (
    <div className="artwork-item">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ArtworkItem;
