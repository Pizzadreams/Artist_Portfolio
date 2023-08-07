// MainApp.js (entry point)
import React from 'react';
import MasonryGallery from './MasonryGallery';
import ContactInquiry from './ContactInquiry';

function MainApp() {
  return (
    <div>
      <h1>Artwork Gallery</h1>
      <MasonryGallery />
      <ContactInquiry />
    </div>
  );
}

export default MainApp;
