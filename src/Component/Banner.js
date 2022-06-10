import React from 'react';
import pic from "../../src/image/bannerpic2.jpg"

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{
            background: `url(${pic})`
        }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold text-white">Welcome To My Website. I'm A Web Developer And Designer</h1>
                    <a href='https://drive.google.com/file/d/1R5vZvyzMmnpKG4GoSxMqJWOwrO_jiQgG/view?usp=sharing' target="_blank"><button class="btn btn-primary">Hired me</button></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;