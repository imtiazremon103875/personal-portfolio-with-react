import React from 'react';
import pic from "../../src/image/imtiazremon.png"

const Intro = () => {
    return (
        <div id='about'>
            <h2 className='text-2xl font-bold text-center my-8 text-white'>About Me</h2>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={pic} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>

                        <h1 class="text-5xl font-bold text-white">Muhammad Imtiajul Amin </h1>
                        <p class="py-6 text-white">I have keep interest in the field of web development. i am working on projects using javascipt(react). I have worked on various types of website which name warehouse management system,national it website,colour balance photography website etc. currently i am pursuing to build my career as a web developer. Programming hero team help me a lot to achieve my goal,which creates an ample opportunity to excel my self as a skilled front end developer.</p>
                        <a href='https://drive.google.com/file/d/1R5vZvyzMmnpKG4GoSxMqJWOwrO_jiQgG/view?usp=sharing' target="_blank"><button class="btn btn-primary">Download Resume</button></a>
                    </div>
                </div>
            </div></div>
    );
};

export default Intro;