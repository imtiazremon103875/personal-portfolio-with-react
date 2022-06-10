import React from 'react';

const Support = () => {
    const support = [
        {
            id: 1,
            image: "https://creativetechpark.com/wp-content/uploads/2021/09/Artboard-49-8-150x150.png",
            name: "Long Experience"
        },
        {
            id: 2,
            image: "https://creativetechpark.com/wp-content/uploads/2021/09/Artboard-57-8-150x150.png",
            name: "Highly professional"
        },
        {
            id: 3,
            image: "https://creativetechpark.com/wp-content/uploads/2021/09/Artboard-58-8-150x150.png",
            name: "Quick Support"
        },
        {
            id: 4,
            image: "https://creativetechpark.com/wp-content/uploads/2021/09/Artboard-60-8-150x150.png",
            name: "Excellent Ui"
        },
        {
            id: 5,
            image: "https://creativetechpark.com/wp-content/uploads/2021/09/Artboard-61-8-150x150.png",
            name: "Focus on result"
        },
        {
            id: 6,
            image: "https://creativetechpark.com/wp-content/uploads/2021/09/Artboard-63-8-150x150.png",
            name: "satisfied guarantee"
        }

    ]
    return (
        <div id='support' className='px-6 my-8'>
            <h2 className='text-3xl text-center text-white'>Why You Should Hire me?</h2>
            <p className='text-center text-xl text-primary'>BECAUSE I AM TRY TO CARE AND TRY TO PROVIDE BEST SERVICE</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-6'>
                {
                    support.map(element => <div key={support.id}> <div className="card lg-w-mx bg-black shadow-xl  text-white text-center p-6">
                        <div className="card-body">
                            <span className="flex justify-center align-center"><img src={element.image} alt="" /></span>
                            <p className='text-2xl'>{element.name}</p>

                        </div>
                    </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Support;