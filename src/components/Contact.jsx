import React from 'react'
import { coffee } from '../assets'
import styles from '../style'

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-start justify-start gap-8 md:gap-16 p-8 min-h-screen">

    <div className="md:w-1/2 w-full mb-8 md:mb-0">
    <h1 className="font-pixel font-bold ss:text-[72px] text-[52px] text-purple ss:leading-[100.8px] leading-[75px]">Contact</h1>
    <p className="font-pixel text-lg text-white leading-relaxed"> Always feel free to hit me up for a coffee chat💬
     <br /><br />📧 qamarzoha@hotmail.com </p>
    </div>
 
          <div className="md:w-1/2 w-full flex justify-center">
            <img 
              src={coffee} 
              alt="Coffee"
              className="pixel-style w-[200px] md:w-[300px]"
            />
          </div>
        </div>
  )
}

export default Contact