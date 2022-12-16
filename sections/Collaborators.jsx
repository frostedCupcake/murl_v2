"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import React from "react";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import { colaboratorsData } from "../constants";

const Collaborators = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col my-2`}
      >
        <motion.h1
          variants={textVariant(1.1)}
          className="font-normal xl:text-[80px] sm:text-[45px] text-[35px]  uppercase text-white tracking-wide mb-[2rem]"
        >
          Collaborators
        </motion.h1>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-10"
          variants={fadeIn("up", "tween", 0.2, 1)}
        >
          {colaboratorsData.map((item) => (
            <img
              key={item.heading}
              src={item.img}
              alt={item.heading}
              className="object-cover w-40"
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Collaborators;