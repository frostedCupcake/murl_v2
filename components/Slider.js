'use client';
import React from 'react';
import styles from '../styles';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

const Slider = () => {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6 mx-auto`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        Slider
      </motion.div>
    </section>
  );
};

export default Slider;
