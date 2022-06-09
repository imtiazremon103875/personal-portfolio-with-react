import React from 'react';
import pic1 from '../image/Capture.JPG'
import pic2 from '../image/Capture2.JPG'
import pic3 from '../image/Capture3.JPG'

const Projects = () => {

    const projects = [
        {
            id: 1,
            image: pic1,
            name: "National It website",
            description: "This we site has a home page,which has banner,header,footer,some parts.This website has login authentication system.This website has payment gateway system.also has admin user dashboard and jwt system",
            url: "https://national-computer-d42f8.web.app/"
        },
        {
            id: 2,
            image: pic2,
            name: "warehouse management system",
            description: " This website has login authentication system.This website has required auth system.This website has route syetem & email verification & email reset system.",
            url: "https://gym--equipment-warehouse.web.app/home"
        },
        {
            id: 3,
            image: pic3,
            name: "Movie lover Bangladesh website",
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
                            <p className='text-white'>{project.description}</p>
                            <div class="card-actions justify-center">
                                <a href={project.url}> <button class="btn btn-primary">live Website</button></a>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Projects;