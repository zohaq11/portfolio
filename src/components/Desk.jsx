import React from 'react'
import styles from '../style'
import { useNavigate } from 'react-router-dom'
import { coffee, laptop, pic, paper, phone, desk } from '../assets'
import { navLinks } from '../constants';

const Desk = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-between"> 
      <h1 className="font-pixel font-bold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] ml-4">Welcome to my desk!</h1>
      <h1 className="font-pixel ss:text-[42px] text-[22px] text-softPink ss:leading-[100.8px] leading-[75px] ml-4">Click an item to explore</h1>

    <div className="relative w-full h-[70vh] bg-cover bg-center bg-no-repeat z-0"
      style={{
        backgroundImage: `url(${desk})`,opacity: 1,
      }}
    >
      {/* Laptop → GitHub */}
  <div className="relative z-10 w-full h-full">
      <a
        href={navLinks.find(link => link.id === "projects").path}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-[6%] left-[1%] w-[20%] min-w-[200px] max-w-[600px] flex flex-col items-center hover-glow"
      >
        <img
          src={laptop}
          alt="Projects"
          className="pixel-style w-full transition-all"
        />
        <span className="font-pixel text-white  responsive-text">Projects</span>
      </a>

      {/* Resume → PDF */}
      <a
        href={navLinks.find(link => link.id === "resume").path}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-[45%] left-[70%] w-[10%] min-w-[100px] max-w-[125px] flex flex-col items-center -rotate-6 hover-glow"
      >
        
        <img
          src={paper}
          alt="Resume"
          className="pixel-style w-full "
        />
        <span className="font-pixel text-white  responsive-text">Resume</span>
      </a>

      {/* Phone → LinkedIn */}
      <a
        href="https://www.linkedin.com/in/zoha-qamar/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-[45%] left-[40%] w-[10%] min-w-[100px] max-w-[200px] flex flex-col items-center rotate-12 hover-glow"
      >
        <img
          src={phone}
          alt="LinkedIn"
          className="pixel-style w-full transition-all"
        />
        <span className="font-pixel text-white  responsive-text">LinkedIn</span>

      </a>

      {/* Pic → About */}
      <div
        onClick={() => navigate('/about')}
        className="absolute top-[55%] left-[20%] cursor-pointer w-[10%] min-w-[65px] max-w-[100px] flex flex-col items-center -rotate-12 hover-glow"
      >
        <img
          src={pic}
          alt="About"
          className="pixel-style w-full transition-all"
        />
        <span className="font-pixel text-white responsive-text">About</span>
      </div>

      {/* Coffee → Contact */}
      <div
        onClick={() => navigate('/contact')}
        className="absolute top-[10%] left-[75%] cursor-pointer w-[10%] min-w-[75px] max-w-[100px] flex flex-col items-center hover-glow"
      >
        <img
          src={coffee}
          alt="Contact"
          className="pixel-style w-full transition-all"
        />
        <span className="font-pixel text-white responsive-text">Contact</span>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Desk;
