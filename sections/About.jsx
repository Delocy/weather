'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const About = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <section>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className={`${styles.xPaddings} py-8 relative`}
        >
          <img
            src="/clouds.jpeg"
            alt="hero_cover"
            className="w-full sm:h-[300px] h-[200px] object-cover relative"
          />
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 w-1/2 flex">
            <input
              type="text"
              placeholder="Search for a city"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="px-4 py-2 border w-full bg-white"
            />
            <button
              onClick={() => {
                // Handle city search logic here, e.g., fetch weather data
                console.log(`Searching for city: ${searchInput}`);
              }}
              className="ml-2 px-8 py-4 bg-zinc-800 text-white  hover:bg-blue-800"
            >
              Search
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;


