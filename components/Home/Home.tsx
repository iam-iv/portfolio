import React from 'react';

const Home = () => {
  return (
    <div className='h-screen w-screen relative bg-eerie-black'>
      <div className='absolute bg-platinum h-2/6 w-5/12 skew-y-12 rounded inset-y-0 -left-24 top-56 transition-opacity opacity-1 duration-150 target:opacity-100' />
      <div className='absolute inset-y-0 left-24 top-72 text-5xl '>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyber-yellow to-spanish-orange box-shadow-xl shadow-black'>
          Hi There!
        </span>
      </div>
      <div className='absolute inset-y-0 left-52 top-96 text-5xl'>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-spanish-orange to-cyber-yellow box-shadow-xl shadow-black font-bold tracking-wide'>
          I&apos;m Isaac
        </span>
      </div>
      <div className='absolute bg-cyber-yellow h-2/6 w-1/12 skew-y-12 rounded inset-y-0 right-12 top-60 transition-opacity opacity-1 duration-150 target:opacity-100' />
    </div>
  );
};

export default Home;
