import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';
import TC from '../../assets/docs/TERMS OF SERVICE.docx'

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">tMovies</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <a href='https://milan-sharma-449.github.io/Portfolio-react/'> Visit Our Site</a>
                        <a href='https://milan-sharma-449.github.io/Portfolio-react/'> Contact Us</a>
                        <a href={TC} download  >Terms Of Service</a>
                        <a href='https://milan-sharma-449.github.io/Portfolio-react/'> About Us</a>
                    </div>
                    <div className="footer__content__menu">
                        <a href='https://github.com/Milan-Sharma-449'>GitHub</a>
                        <a href='https://www.instagram.com/milansharma_449/'>Instagram</a>
                        <a href='https://twitter.com/milansharma449'>Twitter</a>
                        <a href='https://www.linkedin.com/in/milan-sharma-3b9985166/'>LinkedIn</a>
                        <a href='https://stackoverflow.com/users/20611664/milan-sharma'>StackOverflow</a>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">You must watch</Link>
                        <Link to="/">Recent release</Link>
                        <Link to="/">Top Trending</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
