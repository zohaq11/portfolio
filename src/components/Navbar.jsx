import { useState } from 'react';
import { close, menu } from '../assets';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to="/" className="font-pixel text-3xl text-white">
  Zoha Qamar
</Link>


      {/* Desktop links */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-pixel font-normal cursor-pointer text-[20px] hover-glow ${index===navLinks.length-1? 'mr-0': 'mr-10'} text-purple`}
          > 
            {nav.type === "internal" ? (
              <Link to={nav.path}>{nav.title}</Link>
            ) : (
              <a href={nav.path} target="_blank" rel="noopener noreferrer">
                {nav.title}
              </a>
            )}

          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`${toggle ? `flex` : `hidden`} p-6 bg-pink-gradient absolute top-20 right-0 mx-4 my-2 min-w-[250px] sidebar z-50 drop-shadow-lg`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-cute font-normal cursor-pointer text-[20px] hover-glow ${index===navLinks.length-1? 'mr-0': 'mb-4'} text-black`}
          > 
            {nav.type === "internal" ? (
                  <Link to={nav.path} onClick={() => setToggle(false)}>
                    {nav.title}
                  </Link>
                ) : (
                  <a
                    href={nav.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setToggle(false)}
                  >
                    {nav.title}
                  </a>
                )}

          </li>
        ))}
      </ul>
          
        </div>
      </div>

      
    </nav>
  )
}

export default Navbar;