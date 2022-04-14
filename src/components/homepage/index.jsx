import React from 'react';
import './index';
/*import { Link } from 'react-router-dom';*/
import './index.css'
import homeimage from '../../assets/homeimage.jpg'
import homeimage2 from '../../assets/homeimage2.jpg'

/**Estas imagenes seran tomadas del backend cuando se termine la app */
import corecoreada1 from '../../assets/corecoreada1.jpg'
import corecoreada2 from '../../assets/corecoreada2.jpg'
import corecoreada3 from '../../assets/corecoreada3.jpg'

/*const changeimage = () => {
    let myimage = document.getElementById("home-image")
    myimage.setAttribute("src", homeimage2)
};*/

/*const returnimage = () => {
    let myimage = document.getElementById("home-image")
    myimage.setAttribute("src", homeimage)
};*/

const Homepage = () => (
    <>
        {/*<div className="home-container">*/}
            <div className="image-container">
                <img id='home-image' src={homeimage} alt="Author presentation"/>
                <img id='home-image2' src={homeimage2} alt="Author presentation"/>
            </div>
            <div className="description-container">
                <h1>Rincón del caricaturista</h1>
                <p>Sitio creado para la recreación y esparcimiento de quien guste tomarse el tiempo de visitarlo. ¡Conoce al equipo!</p>
            </div>
            <div className="last-entrances-container">
                <div className="entrance">
                    <img src={corecoreada1} alt="last entrance 1"/>
                </div>
                <div className="entrance">
                    <img src={corecoreada2} alt="last entrance 2"/>
                </div>
                <div className="entrance">
                    <img src={corecoreada3} alt="last entrance 3"/>
                </div>
            </div>
        {/*</div>*/}
    </>
);

export default Homepage;