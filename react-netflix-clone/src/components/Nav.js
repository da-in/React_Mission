import React, { useEffect, useState } from 'react';
import './Nav.css';

export default function Nav() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            // console.log(window.scrollY);
            if (window.scrollY > 50) {
                setShow(true);
            } else {
                setShow(false);
            }
        });

        return () => {
            window.removeEventListener('scroll', () => {});
        };
    }, []);

    return (
        <nav className={`nav ${show && 'nav__black'}`}>
            <img
                alt="Netflix logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                className="nav__logo"
                onClick={() => window.location.reload()}
            />
            <img
                alt="User logged"
                src="https://i.pinimg.com/originals/ce/1a/68/ce1a68b494cd4914a8e724d40645ac6c.png"
                className="nav__avatar"
            />
        </nav>
    );
}
