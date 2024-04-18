import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Main.css';
import 'react-slideshow-image/dist/styles.css';

const Main = () => {
    const images = [
        "https://techedinlabs.com/wp-content/uploads/2022/08/product-engg.png",
        "https://www.stress.com/wp-content/uploads/product-development-landing-page-1.jpg",
        "https://miro.medium.com/v2/resize:fit:1400/1*bbwRXmUv8Vy3v92qSHm0wg.png",
    ];

    return (
        <div>
        
        <div className="info-container">
      <div className="info-box">
        <h2>Notifications</h2>
        <p></p>
        {/* <p>This is some information in Box 1.</p>
        <a href="#">Link 1</a> */}
      </div>

      <div className="info-box">
        <h2>Tasks</h2>
        {/* <p>This is some information in Box 2.</p>
        <a href="#">Link 2</a> */}
      </div>
    </div>
    <Slide >
            <div className="each-slide-effect">
                <div>
                    <img src="https://techedinlabs.com/wp-content/uploads/2022/08/product-engg.png" width='300px'></img>
                </div>
            </div>
            <div className="each-slide-effect">
            <img src="https://www.stress.com/wp-content/uploads/product-development-landing-page-1.jpg" width='300px'></img>
            </div>
            
            <div className="each-slide-effect">
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*bbwRXmUv8Vy3v92qSHm0wg.png" width='300px'></img>
            </div>
        </Slide>
        </div>
    );
};

export default Main;