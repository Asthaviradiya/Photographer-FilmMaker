import React from 'react'
import WomanImg from '../img/contact/woman (1).png'

const Contact = () => {
  return (
    <section className='section'>
      <div className="container mx-auto h-full">
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left '>
          <div>bg</div>
          <div className='lg:flex-1 lg:pt-32 px-4'>
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12'>I would love to get suggestions from you</p>
            <form className= ''>
              <div>
                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type="text" placeholder='your name'/>
                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type="text" placeholder='your email address'/>
              </div>
            </form>
          </div>
          <div>img</div>
        </div>
      </div>
    </section>
  )
}

export default Contact
