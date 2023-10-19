'use client';
import React,{useState} from 'react'
import GradientBorder from '../GradientBorder'
import { AttentionSeeker } from 'react-awesome-reveal'
// import {useForm, ValidationError} from '@formspree/react'

const Contact = () => {
    // const [state, handleSubmit] = useForm("YOUR_FORM_ID");
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)


    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true)
        const formData = new FormData(e.target);
        const plainFormData = Object.fromEntries(formData.entries());
        const formDataJsonString = JSON.stringify(plainFormData);
        // console.log(formDataJsonString)
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: formDataJsonString,
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setIsSubmitting(false)
                setSubmitted(true)
            })
            .catch((error) => {
                console.error('Error:', error);
                setIsSubmitting(false)
            });
    }

    
    return (
        <>
            <div id='contact' className='flex flex-col lg:flex-row px-8 lg:px-20 py-8 mt-20'>

                <div className='w-full lg:w-5/12'>
                    
                    <AttentionSeeker effect={'pulse'}>
                    <h1 className='towntendisplay text-4xl lg:text-5xl bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text'>Contact</h1>
                    </AttentionSeeker>

                    <p className='w-full  lg:w-4/6 my-10 text-justify'>
                       We don't bite. Get in touch.
                    </p>

                    <div className='flex items-center gap-6'>
                        <div>
                            <img src='/images/Message.png' alt='Photo2' className='h-10' />
                        </div>
                        <div>
                            <span className='text-white'>Email</span><br />
                            <span className='text-white'>in@leagueofsound.com</span>
                        </div>
                    </div>

                    <div className='h-[1px] w-4/6 bg-gradient-to-r from-yellow-400 via-orange-400 to-transparent my-6'></div>

                    <p className='w-full  lg:w-4/6 my-10 text-justify'></p>


                    <div>
                    <img src='/images/contact-phone.png' alt='Photo2' className='lg:hidden w-3/4 mx-auto my-10' />

                        <img src='/images/map.png' alt='Photo2' className='w-full  lg:w-4/6' />
                        {/* <div class="mapouter"><div class="gmap_canvas"><iframe className='w-4/6 min-h-[500px] map'   id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a><br/>
                    <a href="https://www.embedgooglemap.net"></a></div></div> */}
                    </div>

                    <p className='w-full  lg:w-4/6 my-10 text-justify'>
                       First Floor, 690 Great West Road, Osterley Village, Isleworth, England, TW7 4PU
                    </p>

                </div>

                <div className='w-full lg:w-7/12'>

                    <img src='/images/contact-phone.png' alt='Photo2' className='hidden lg:block w-1/2 mx-auto' />

                    {
                        submitted?  (
                            <div className='my-40 flex'>
                                <p className='text-white mx-auto'>Thanks for your message. <br/>We'll get back to you soon.</p>
                            </div>


                        ):(

 
                    <form onSubmit={handleSubmit} className=''>
                    <div className='flex flex-col gap-6 mt-10'>
                        <div className='flex flex-col lg:flex-row gap-10'>
                            <div className='w-full lg:w-1/2'>
                                <label htmlFor='name' className='text-white'>Name</label>
                                <GradientBorder width="1px">
                                    <input name='name'  id='name' type='text' placeholder='Name' className='p-4 w-full text-white focus:outline-none' />
                                </GradientBorder>
                               
                            </div>
                            <div className='w-full lg:w-1/2'>
                                <label htmlFor='email' className='text-white'>Email</label>
                                <GradientBorder width="1px">
                                    <input name='email'  id='email' type='text' placeholder='Email' className='p-4 w-full text-white focus:outline-none' />
                                </GradientBorder>
                               
                            </div>
                        </div>

                        <div className='w-full lg:w-4/6 '>
                            <label htmlFor='Message' className='text-white'>Message</label>
                            <GradientBorder width="1px">
                                <textarea name='message' id='message' placeholder='Message' className='p-4 min-h-[200px] w-full text-white focus:outline-none'></textarea>
                            </GradientBorder>
                          
                        </div>

                        <div className='flex flex-row w-full lg:w-4/6 gap-10 lg:gap-20'>

                            <div className='w-2/6'>
                                <div className={`bg-gradient-to-r from-yellow-500 to-orange-500 p-[1px]`}>
                                <button type='submit' disabled={isSubmitting} className='btn w-full bg-gradient-to-b from-gray-900 to-gray-800 text-yellow-500 px-12 py-4 rounded-none font-sans'>
                                    Submit
                                </button>
                                </div>
                            
                            </div>

                            <div className='w-4/6'>
                                <p>
                                Well get back to you soon. 
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    </form>

                        )}
                </div>
            </div>
        </>
    )
}

export default Contact