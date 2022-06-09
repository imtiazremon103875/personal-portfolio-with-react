import React from 'react';

const Myskill = () => {
    const skill = [
        {
            id: 1,
            image: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",
            name: "HTML"
        },
        {
            id: 3,
            image: "https://blog.leonhassan.co.uk/content/images/2019/09/css3.svg",
            name: "CSS"
        },
        {
            id: 3,
            image: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
            name: "Javascipt"
        },
        {
            id: 4,
            image: "https://res.cloudinary.com/practicaldev/image/fetch/s--1mtEvyef--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn.hashnode.com/res/hashnode/image/upload/v1647490619965/P1dsNgj-f1.png",
            name: "React js"
        },
        {
            id: 5,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSibU2VjoNp6pEt2aehkQHjalce0WW9sSHMV0biKWaz03NH1QH_3OG2VPuFmo32i6VL3SI&usqp=CAU",
            name: "Node js"
        },
        {
            id: 6,
            image: "https://g.foolcdn.com/art/companylogos/square/mdb.png",
            name: "Mongo Db"
        }

    ]
    return (
        <div id='skill' className='px-6 my-8'>
            <h2 className='text-3xl text-center text-white'>My Skills</h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-6'>
                {
                    skill.map(element => <div key={skill.id}> <div className="card lg-w-mx rounded-full w-72 bg-gray-600 shadow-xl  text-white text-center p-6">
                        <div className="card-body">
                            <span className="flex justify-center align-center"><img className='w-24' src={element.image} alt="" /></span>
                            <p className='text-2xl'>{element.name}</p>

                        </div>
                    </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Myskill;