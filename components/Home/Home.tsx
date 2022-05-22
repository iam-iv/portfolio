import Image from 'next/image';
import React from 'react';
import myPic from '../../public/me-nobg.png';
import styles from '../../styles/Home.module.scss';
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <div className='h-screen w-screen relative bg-eerie-black'>
      <div className='absolute bg-platinum h-2/6 w-5/12 skew-y-12 rounded inset-y-0 -left-24 top-56 transition-opacity opacity-1 duration-150 target:opacity-100' />
      <div className='absolute inset-y-0 left-24 top-80 text-5xl '>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyber-yellow to-spanish-orange box-shadow-xl shadow-black'>
          Hi There!
        </span>
      </div>
      <div className='absolute inset-y-0 left-52 top-96 text-5xl'>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-spanish-orange to-cyber-yellow box-shadow-xl shadow-black font-bold tracking-wide'>
          I&apos;m Isaac
        </span>
      </div>
      <div className={styles.myPic}>
        <Image
          src={myPic}
          alt='Picture'
          width='550rem'
          layout='fixed'
          height='800rem'
          priority
        />
      </div>
      <div className='absolute bg-cyber-yellow h-2/6 w-1/12 skew-y-12 rounded inset-y-0 right-12 top-60 transition-opacity opacity-1 duration-150 target:opacity-100' />
      <div className='flex justify-center relative '>
        <motion.svg
          xmlns='http://www.w3.org/2000/svg'
          className='stroke-spanish-orange absolute -top-1'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='2'
          width='10rem'
          animate={{ translateY: [null, -20, 0] }}
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19 9l-7 7-7-7'
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default Home;
