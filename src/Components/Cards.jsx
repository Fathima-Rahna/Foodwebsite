import React from 'react';
import burgerImage from '../assets/images/burger.jpg'
import chickImage from '../assets/images/chicken.jpg'
import iceImage from '../assets/images/icecream.jpg'
import orangeImage from '../assets/images/orange.jpg'
import honeyImage from '../assets/images/honey.jpg'
import chocoImage from '../assets/images/chocolte.jpg'
import "./Cards.css";


export const Cards = () => {
    return (
      <>
      <h1 className='heading'>Amazing Foods.....</h1>
        <div className="cards-container" >
        
            <div className="card " style={{ width: '500px' }}>
                <img src={orangeImage} className="card-img-top" alt="orange" />
                <div className="card-body">
                    <h5 className="card-title fw-bold">Cool</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary bg-dark" >View More</a>
                </div>
            </div>

            <div className="card " style={{ width: '500px' }}>
                <img src={chocoImage} className="card-img-top" alt="Choco" />
                <div className="card-body">
                    <h5 className="card-title fw-bold">Sweeter</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary bg-dark">View More</a>
                </div>
            </div>
            <div className="card " style={{ width: '500px' }}>
                <img src={iceImage} className="card-img-top" alt="ice" />
                <div className="card-body">
                    <h5 className="card-title fw-bold">Creamy</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary bg-dark" >View More</a>
                </div>
            </div>
        </div>

       {/* hbnnnnnnnnnnnnnnnnnnn */}

       <div className="cards-container" >
        
        <div className="card " style={{ width: '500px' }}>
            <img src={honeyImage} className="card-img-top" alt="Honey" />
            <div className="card-body">
                <h5 className="card-title fw-bold">Shrimbs</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary bg-dark">View More</a>
            </div>
        </div>

        <div className="card " style={{ width: '500px' }}>
            <img src={chickImage} className="card-img-top" alt="Chicken" />
            <div className="card-body">
                <h5 className="card-title fw-bold">Chicky</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary bg-dark">View More</a>
            </div>
        </div>
        <div className="card " style={{ width: '500px' }}>
            <img src={burgerImage} className="card-img-top" alt="Burger" />
            <div className="card-body">
                <h5 className="card-title fw-bold">Burger</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary bg-dark">View More</a>
            </div>
        </div>
    </div>

   
        </>
    )
}


export default Cards