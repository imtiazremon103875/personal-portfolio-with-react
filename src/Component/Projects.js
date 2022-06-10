import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../image/Capture.JPG'
import pic2 from '../image/Capture2.JPG'
import pic3 from '../image/Capture3.JPG'
import pic4 from '../image/ps-1.JPG'
import pic5 from '../image/ps-2JPG.JPG'
import pic6 from '../image/ps-3.JPG'
import pic7 from '../image/ps-4.JPG'
import pic8 from '../image/ps-5.JPG'
import pic9 from '../image/ps-6.JPG'
import pic10 from '../image/ps-7.JPG'
import pic11 from '../image/ps-8.JPG'
import pic12 from '../image/ps-9.JPG'

const Projects = () => {

    const projects = [
        {
            id: 1,
            image: pic1,
            image2: pic4,
            image3: pic5,
            image4: pic6,
            name: "National It website",
            intro: "This is manufacturer Website  where different type of computer parts sell.",
            description: "This we site has a home page,which has banner,header,footer,some parts.This website has login authentication system.This website has payment gateway system.also has admin user dashboard and jwt system",
            url: "https://national-computer-d42f8.web.app/"
        },
        {
            id: 2,
            image: pic2,
            image2: pic7,
            image3: pic8,
            image4: pic9,
            name: "warehouse management system",
            intro: "This is Gym tools warehouse management website.where an admin can easily stock many gym tools ",
            description: " This website has login authentication system.This website has required auth system.This website has route syetem & email verification & email reset system.",
            url: "https://gym--equipment-warehouse.web.app/home"
        },
        {
            id: 3,
            image: pic3,
            image2: pic10,
            image3: pic11,
            image4: pic12,
            name: "Movie lover Bangladesh website",
            intro: "This is a movie review page,where a user easily give his/her review about movie ",
            description: "Firstly i work with nav bar which called header section,i complete route for this header section.2nd i work for home section,which has a movie name, and movie details.3rd i work 3 review system ,for this movie,which is show in review contain. if i click see more button then we see all reviews which is give by user",
            url: "https://adorable-fudge-7a97bb.netlify.app/"
        }
    ]

    return (
        <div id='projects'>
            <h2 className='text-3xl text-center text-white mb-6'>My Project</h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-12'>

                {
                    projects.map(project => <div class="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={project.image} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{project.name}</h2>
                            <p className='text-white'>{project.intro}</p>
                            <div class="card-actions justify-center">
                                <Link to={`/details/${project.id}`}> <button class="btn btn-primary">see details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Projects;