import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';
import Specials from './Specials';
import About from './About';
import Testimonial from './Testimonial';
import CustomerSay from './CustomerSay';

import { useState } from 'react';


function Main() {

    return (
        <main>
            <Specials />
            <CustomerSay />
            <About />
        </main>
    );
}

export default Main;
