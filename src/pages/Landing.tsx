import "./Landing.css";
import rocketman from "../imgs/rocketman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function () {
  return (
    <div className='body'>
      <h1 className='welcome'>Welcome Rocketeer !</h1>
      <motion.a
        href='/personalinfo'
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px var(--redberry-red)",
          textShadow: "0px 0px 8px var(--redberry-red)",
        }}
        whileTap={{ scale: 0.9 }}
        className='start'>
        Start Questionaire
      </motion.a>
      <Link to='/submited' className='submited-applications'>
        Submitted Applications
      </Link>
      <motion.div
        animate={{
          rotate: [0, -90, 0],
          x: [0, 500, -500, 0],
          y: [70, -40, 0],
          opacity: [0, 1],
          transition: {
            duration: 2,
          },
        }}>
        <motion.img
          src={rocketman}
          alt='rocketman'
          className='rocketeer'
          animate={{
            rotate: [0, -90, 0],
            transition: {
              delay: 2,
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
            },
          }}
        />
      </motion.div>
    </div>
  );
}
