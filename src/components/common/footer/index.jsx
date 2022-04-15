import React from "react";
import './index.css';
import facebookicon from '../../../assets/facebookicon.png';
import koficon from '../../../assets/koficon.png';

const Footer = () => (
    <>
        <footer className="footer-container">
            <h3 id="contact">Contácto</h3>
            <div className="texts">
                <p id="email"><span>Correo: </span> rodrigo.zermenosan@gmail.com</p>
                <p>
                    <span id="facebook-tittle">Facebook: </span>
                    <a href="https://www.facebook.com/IdeasMaxzermeno" target={"_blank"}>
                        <img src={facebookicon} width={35} height={35} alt="facebook icon"/>
                    </a>
                </p>
                <p>
                    <span id="kofi-tittle">Ko-fi: </span>
                    <a href="https://ko-fi.com/m_zermeno#" target={"_blank"}>
                        <img src={koficon} width={35} height={35} alt="ko-fi icon" />
                    </a>
                </p>
            </div>
        </footer>
    </>
);

export default Footer;