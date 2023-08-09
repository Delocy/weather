'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Hero = () => (
  <section>
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <div>
        <h1 className="text-4xl md:text-5xl font-semiBold mb-2">
          Welcome to Climavisions Weather
        </h1>
      </div>
      <div className="ml-8"> {/* Add margin to create space */}
        <h1 className="text-lg md:text-xl">
          Your trusted source for accurate weather forecasts. Provide you a world wide weather forecast.
        </h1>
      </div>
    </div>
    </motion.nav>
  </section>
   
);

export default Hero;