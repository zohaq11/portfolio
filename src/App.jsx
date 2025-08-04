import React from 'react'
import styles from './style';
import ChatBot from './components/ChatBot';

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

        </Routes>
      </div>
    </div>
    <ChatBot />
    <footer className="w-full text-center py-4">
      <p className=" text-white text-sm">
        © {new Date().getFullYear()} Zoha Qamar. All rights reserved.
      </p>
    </footer>
  </div>

);

export default App
