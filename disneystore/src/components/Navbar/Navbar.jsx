import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faHeart, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className={styles.Navbar_container}>
            <div className={`${styles.Navbar_links} ${showMenu ? styles.show : ''}`}>
                <ul>
                    <li><a href="https://www.disneyplus.com/de-de/home">Disney +</a></li>
                    <li><a href="https://www.disney.de/">Disney.de</a></li>
                    <li><a href="">Hilfe</a></li>
                </ul>
                <div className={styles.menu_icon} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            <div className={styles.Navbar_logo}>
                <img src="/Images/Disney-logo.png" alt="Logo" className={styles.logo} />
            </div>
            <div className={styles["right-ul"]}>
                <ul>
                    <li><a href="#"><FontAwesomeIcon icon={faSignInAlt} /> Anmelden</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faHeart} /> Favoriten</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faShoppingCart} /> Warenkorb</a></li>
                </ul>
                
            </div>
            
        </div>
    );
}

export default Navbar;

