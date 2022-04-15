import React from "react";
import './index.css'
import { Link } from "react-router-dom";

const changebutton = () =>{
    let myelement = document.getElementById("search-button")
    myelement.setAttribute("id", "search-button-mouseover")
};

const originalbutton = () =>{
    let myelement = document.getElementById("search-button-mouseover")
    myelement.setAttribute("id", "search-button")
};

const changeinput = () =>{
    let myelement = document.getElementById("search-bar")
    myelement.setAttribute("id", "search-bar-mouseover")
};

const originalinput = () =>{
    let myelement = document.getElementById("search-bar-mouseover")
    myelement.setAttribute("id", "search-bar")
};

const menuMobile =() =>{
    let menuButtom = document.querySelector(".menu-mobile-identificator")
    if (menuButtom.getAttribute("id")==="menu-mobile-hidden"){
        menuButtom.setAttribute("id","menu-mobile")
    } else if (menuButtom.getAttribute("id")==="menu-mobile"){
        menuButtom.setAttribute("id","menu-mobile-hidden")
    }
};

const Header = () =>{
    return(
        <>
            <header className="header-container">
            <h2 id="menu-mobile-button" onClick={menuMobile}>Menu</h2>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Inicio</Link>
                        </li>
                        <li>
                        <Link to='/galeria'>Galería</Link>
                        </li>
                        <li>
                        <Link to='/sobremi'>Sobre mí</Link>
                        </li>
                        <li>
                        <Link to='/contacto'>Contácto</Link>
                        </li>
                    </ul>
                    <div className="search-container">
                        <input id="search-bar" onMouseOver={changeinput} onMouseLeave={originalinput} type="text" name="search" placeholder="Busca un post"/>
                        <button id="search-button" onMouseOver={changebutton} onMouseLeave={originalbutton}>Buscar</button>
                    </div>
                </nav>
            </header>
            <nav className="menu-mobile-identificator" id="menu-mobile-hidden">
                <ul>
                    <li>
                        <Link to='/'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/galeria'>Galería</Link>
                    </li>
                    <li>
                        <Link to='/sobremi'>Sobre mí</Link>
                    </li>
                    <li>
                        <Link to='/contacto'>Contácto</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Header;