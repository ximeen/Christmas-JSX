import './main.scss';

import {Header} from './components/Header'
import {Home} from './components/Home'
import {Footer} from './components/Footer'
import {Script} from './components/Code'

Header();
Home();
Footer();
Script();



// ------------LIB SCROLL REVEAL --------------

const sr = ScrollReveal({
    distance: '20px',
    duration: 1800,
    reset: true,
});

sr.reveal(`.home__data, .home__image, 
           .decoration__data,
           .accessory__content,
           .footer__content`, {
    origin: 'top',
    interval: 200,
})

sr.reveal(`.share__image`, {
    origin: 'left'
})

sr.reveal(`.share__data`, {
    origin: 'right'
})