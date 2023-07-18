import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form action='https://getform.io/f/a04094c9-795e-4d6d-af2f-57cc980c5a10' method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email on ismailbutt6926@gmail.com </p>
            </div>
            <input className='bg-gray-200 p-2 ' type='text' placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-gray-200' type='Email' placeholder='Email'name="email"/>
            <textarea rows={10} className='bg-gray-200 p-2' name='message' placeholder='Mesage'/>
            <button className='text-white border-2 hover:bg-pink-600  hover:border-pink-600 px-4 py-3 my-8 mx-auto '>Lets collaborate</button>

        </form>
    </div>

  )
}

export default Contact