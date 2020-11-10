import React from 'react';
import galleryImage1 from '../images/gallery_1.jpg';
import galleryImage2 from '../images/gallery_2.jpg';
import galleryImage3 from '../images/gallery_3.jpg';
import galleryImage4 from '../images/gallery_4.jpg';
import galleryImage5 from '../images/gallery_5.jpg';
import galleryImage6 from '../images/gallery_6.jpg';

const Gallery = (props) => {

    return (

        <div id="gallery">
		    <div class="wrap">
			    <h2>Issue Twenty</h2>
			    <h3>A visual guide to the Southwest</h3>
			    <div class="masonry">
				    <img src={galleryImage1} alt=""/>
				    <img src={galleryImage2} alt=""/>
				    <img src={galleryImage3} alt=""/>
				    <img src={galleryImage4} alt=""/>
				    <img src={galleryImage5} alt=""/>
				    <img src={galleryImage6} alt=""/>
			    </div>
		    </div>
	    </div>
    );
}

export default Gallery;