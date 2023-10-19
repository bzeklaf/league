'use client';
import React,{useState,useRef} from 'react'


const WorkWithUs = () => {

    const inputFileRef = useRef(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [blob, setBlob] = useState(null)
    const [isUploading, setIsUploading] = useState(false)
    const [email, setEmail] = useState('')

    const [fileMsg, setFileMsg] = useState('Select a file(Max 4mb)')

async function handleUpload(e){
    const file = inputFileRef.current.files[0]

    // check if selected file is more than 4mb
    if(file.size>4000000){
        setFileMsg('File size must be less than 4mb')
        return
    }

    if(!file || blob!=null){
        return
    }

    setIsUploading(true)

    const response = await fetch(
        `/api/upload?filename=${file.name}`, {
        method: 'POST',
        body: file,
    });

    if (response.status !== 200) {
        console.log('Error:', response);
        setFileMsg('Error uploading file')
    }else{
        const newBlob = (await response.json());
        setBlob(newBlob);
    }
    setIsUploading(false)
}


async function handleSubmit(e){
    e.preventDefault();

    // check if file is uploaded
    if(blob==null){
        setFileMsg('Please upload a file')
        return
    }

    setIsSubmitting(true)

    const response = fetch('/api/work', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            audioUrl: blob.url
        }),
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
    <div id='workwithus' className='p-12 lg:p-20 '>
        <div className='grid grid-cols-1 lg:grid-cols-2 border-2 border-yellow-500 shadow-lg shadow-black'>

            <div className='flex flex-col content-center my-auto'>
            <h2 className='basis-full towntendisplay uppercase text-center text-3xl lg:text-6xl font-bold my-4 mb-8 bg-gradient-to-r from-yellow-300 to-orange-600 text-transparent bg-clip-text '>upload your<br></br> demo</h2>
                <p className='p-8 w-full  lg:w-4/6 mx-auto'>
                Whether you're an aspiring musician or an experienced producer, we want to hear from you.
                </p>


                {
                    submitted?
                    <div className='flex flex-col items-center'>
                        <h3 className='text-2xl'>Thank you for your submission</h3>
                        <p className='text-xl'>We will get back to you shortly</p>
                    </div>
                    :
                    <form onSubmit={handleSubmit} className='hidden lg:block mx-auto basis-full lg:basis-9/12 '>
                    <button onClick={(e)=>inputFileRef.current.click()} className='mx-auto audio_btn block'/>

                    <div className='flex items-center'>
                        <span className='text-white mx-auto'>
                           {isUploading? 'Uploading...': blob==null? fileMsg: "File uploaded"}
                        </span>
                    </div>

                    <input required disabled={isUploading} name='inputFile' type='file' ref={inputFileRef} className='hidden' multiple={false} accept='audio/*' onChange={handleUpload}/>

                    <input value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }} className='placeholder:text-yellow-600 placeholder:text-center  border-[1px] border-yellow-500 my-2 p-4 px-8 mb-8' type="email" placeholder="Your Email Address" required/>
                   
                    <div className='flex items-center'>
                        <button disabled={blob==null} type='submit' className='block mx-auto audio_upload_btn'/>
                    </div>
                
                </form>
                }

                
            </div>


            <div>
                <img src='/images/PHOTO 2.png' alt='Photo2' className='w-full'/>
                
                <div className='flex flex-col content-center my-auto'>
                <div className='lg:hidden mx-auto basis-full lg:basis-9/12 mb-12'>


                {
                    submitted?
                    <div className='flex flex-col items-center'>
                        <h3 className='text-2xl'>Thank you for your submission</h3>
                        <p className='text-xl'>We will get back to you shortly</p>
                    </div>
                    :
                    <form onSubmit={handleSubmit} className=' '>
                    <button onClick={(e)=>inputFileRef.current.click()} className='mx-auto audio_btn block'/>

                    <div className='flex items-center'>
                        <span className='text-white mx-auto'>
                           {isUploading? 'Uploading...': blob==null? fileMsg: "File uploaded"}
                        </span>
                    </div>

                    <input required disabled={isUploading} name='inputFile' type='file' ref={inputFileRef} className='hidden' multiple={false} accept='audio/*' onChange={handleUpload}/>

                    <input value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }} className='placeholder:text-yellow-600 placeholder:text-center  border-[1px] border-yellow-500 my-2 p-4 px-8 mb-8' type="email" placeholder="Your Email Address" required/>
                   
                    <div className='flex items-center'>
                        <button disabled={blob==null} type='submit' className='block mx-auto audio_upload_btn'/>
                    </div>
                
                </form>
                }
                   
                </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default WorkWithUs