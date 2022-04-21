import React from 'react';
/*import { Link } from 'react-router-dom';*/
import './index.css'
import homeimage from '../../assets/homeimage.jpg'
import homeimage2 from '../../assets/homeimage2.jpg'

/**Estas imagenes seran tomadas del backend cuando se termine la app */
import corecoreada1 from '../../assets/corecoreada1.jpg'
import corecoreada2 from '../../assets/corecoreada2.jpg'
import corecoreada3 from '../../assets/corecoreada3.jpg'

const changentrance = (e) =>{
    if (!e) e= window.event;
    let mytarget = e.currentTarget.id;
    var myelement="";
    let actualWith = window.innerWidth;
    if (actualWith > 768){
        switch(mytarget){
            case 'test':
                myelement = document.getElementById(mytarget)
                myelement.setAttribute("class", "entrance-hover")
                break
            case 'test2':
                myelement = document.getElementById(mytarget)
                myelement.setAttribute("class", "entrance-hover")
                break
            case 'test3':
                myelement = document.getElementById(mytarget)
                myelement.setAttribute("class", "entrance-hover")
                break
            default:
        };
  } 
};

const originalentrance = (e) =>{
    if (!e) e= window.event;
    let mytarget = e.currentTarget.id;
    var myelement="";
    switch(mytarget){
        case 'test':
            myelement = document.getElementById(mytarget)
            myelement.setAttribute("class", "entrance")
            break
        case 'test2':
            myelement = document.getElementById(mytarget)
            myelement.setAttribute("class", "entrance")
            break
        case 'test3':
            myelement = document.getElementById(mytarget)
            myelement.setAttribute("class", "entrance")
            break
        default:
    };
};

const Homepage = () => (
    <>
        <div className="homepage-container">
            <div className="image-container">
                <img id='home-image' src={homeimage} alt="Author presentation"/>
                <img id='home-image2' src={homeimage2} alt="Author presentation"/>
            </div>
            <div className="description-container">
                <h1>Rincón del caricaturista</h1>
                <p>Sitio creado para la recreación y esparcimiento de quien guste tomarse el tiempo de visitarlo. ¡Conoce al equipo!</p>
            </div>
            <div className="last-entrances-container">
                <div className="entrance"  id='test' onMouseOver={changentrance} onMouseLeave={originalentrance}>
                    <img src={corecoreada1} alt="last entrance 1"/>
                </div>
                <div className="entrance" id='test2' onMouseOver={changentrance} onMouseLeave={originalentrance}>
                    <img src={corecoreada2} alt="last entrance 2"/>
                </div>
                <div className="entrance" id='test3' onMouseOver={changentrance} onMouseLeave={originalentrance}>
                    <img src={corecoreada3} alt="last entrance 3"/>
                </div>
            </div>
        </div>
    </>
);

export default Homepage;