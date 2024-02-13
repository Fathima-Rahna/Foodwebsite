
import React from 'react';
import coolImage from '../assets/images/cool.jpg';
import "./Imager.css"; // Import CSS file

const Imager = () => {
  return (
    <div className="container"> {/* Add container class */}
      <div className="heading-container">
        <div   className="card text-bg-dark">
          <img src={coolImage} className="card-img" alt="Cool"/>
          <div className="card-img-overlay">
            <h5 className="header">FOoD OnLY FoOD</h5>
            <p className="para">"One cannot think well, love well, sleep well, if one has not dined well."</p>
            <p className="para"><small>Iam in love with Foods..</small></p>
          </div>
        </div>
      </div>
 
    </div>
   
  );
}

export default Imager;
