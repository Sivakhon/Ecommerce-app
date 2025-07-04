import React from 'react'
import NewsletterBox from '../components/NewsletterBox'
import Titles from '../components/Titles'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Titles text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gary-600'>
          <p>dsjfgdsfhgdsfhgdkljfg</p>
          <p>dfgsdfgdsfgdsfgdsf</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission ................................</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Titles text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Insurance:</b>
          <p className='text-gray-600'>dfhgdskljfghdsjfkghsldkfjghsdkljfghsdlkfjghdsklfghdskfjdgshl</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>dfhgdskljfghdsjfkghsldkfjghsdkljfghsdlkfjghdsklfghdskfjdgshl</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>dfhgdskljfghdsjfkghsldkfjghsdkljfghsdlkfjghdsklfghdskfjdgshl</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
