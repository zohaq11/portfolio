import React from 'react'
import styles from './style';

import {About, Contact, Navbar, Projects, Resume, Desk} from './components/';
import { Routes, Route } from 'react-router-dom';

export const App = () => (
  <div className="bg-pink-gradient w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-pink-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
       
        <Routes>
          <Route path="/" element={<Desk />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more pages like <Projects /> or <Resume /> if you want too */}
        </Routes>
      </div>
    </div>

    
  </div>

  

);


export default App
