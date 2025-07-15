import React from 'react'
import { pic } from '../assets'
import styles from '../style'

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-start justify-start gap-8 md:gap-16 p-8 min-h-screen">
      {/* Left side: text */}
    <div className="md:w-1/2 w-full mb-8 md:mb-0">
    <h1 className="font-pixel font-bold ss:text-[72px] text-[52px] text-purple ss:leading-[100.8px] leading-[75px]">About Me</h1>
    <p className="font-pixel text-lg text-white leading-relaxed"> Hi! I'm a recent UofT CS and Stats grad and this is my portfolio website😁
    <br /><br /> Since a portfolio is supposed to showcase my work, I figured what better way than digitalizing where the magic happens🪄 - my desk!
    <br /><br /> Heres to more projects where I get to combine my technical skills with creativity so stay tuned for updates as I have so many ideas cooking and so much more to add here🙂‍↕️</p>
    </div>

    {/* Right side: icon/image */}
      <div className="md:w-1/2 w-full flex justify-center">
        <img 
          src={pic} 
          alt="Zoha"
          className="pixel-style w-[200px] md:w-[300px]"
        />
      </div>
    </div>
  )
}

export default About