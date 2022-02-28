import React from "react";
import "./Landing.css";
import rocketman from "./images/rocketman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function () {
  return (
    <div className='body'>
      <h1 className='welcome'>Welcome Rocketeer !</h1>
      <Link to='/questionaire' className='start'>
        Start Questionaire
      </Link>
      <Link to='/submited' className='submited'>
        Submitted Applications
      </Link>
      <motion.img
        src={rocketman}
        alt='rocketman'
        className='rocketeer'
        animate={{
          rotate: [0, -90, 0],
          x: [0, 500, -500, 0],
          y: [70, -40, 0],
          opacity: [0, 1],
          transition: {
            duration: 2,
          },
        }}
      />
    </div>
  );
}
