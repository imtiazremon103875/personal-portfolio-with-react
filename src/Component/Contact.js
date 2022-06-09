
import emailjs from "emailjs-com"
import React from 'react';
import contact from "../image/image.webp"

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault()
        emailjs.sendForm('service_9b4hkqs', 'template_fyta8rz', e.target, 'fdPHr_CpJbphToPTE').
            then(res => {
                console.log(res);

            }).catch(err => console.log(err))

    }
    return (
        <div id='contact'>
            <section style={{
                background: `url(${contact})`
            }} className='flex justify-center items-center pt-12 ' >
                <div className='text-center'>
                    <h1 className=' text-3xl text-white'>Contact With Us</h1>
                    <p className='text-white text-xl'>Send Me Mail and Give Us feedback</p>
                    <form onSubmit={sendEmail}>
                        <input type="text" name="name" className="input input-bordered  w-full max-w-xs " />
                        <br />
                        <input type="text" name="user_email" className="input input-bordered t w-full max-w-xs " />

                        <br />
                        <textarea className="textarea  pt-7" name="message" cols="40" rows="3" ></textarea>
                        <br />
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default Contact;