import React from 'react';

import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';

import Intro from './Intro';
import Myskill from './Myskill';
import Projects from './Projects';
import Support from './Support';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Intro></Intro>
            <Myskill></Myskill>
            <Projects></Projects>
            <Support></Support>
            <Contact></Contact>
            <Footer></Footer>


        </div>
    );
};

export default Home;