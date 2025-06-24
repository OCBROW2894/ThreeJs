import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'> 
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Bryian</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I recently completed my Bachelor of Science degree in Software Development. I have hands-on experience in various programming languages and frameworks. <br className='sm:block hidden' />
            For game development, I use C# in Unity Hub alongside Visual Studio 2022, and I also use Blender for creating and editing 3D assets. I use C++ with Arduino Uno boards and Python with Raspberry Pi boards when working on IoT projects.
            I enjoy building interactive websites and web applications using Tailwind CSS, React, and Three.js. I have also worked with Laravel 11 for backend development. <br className='sm:block hidden' />
            For desktop applications, I use VB.NET, and I have had some interaction with other languages such as Java and C. Outside of software development, I dedicate my free time to creating pencil artworks, and I plan to transition to digital art once I acquire a drawing tablet.
            I also enjoy watching anime, especially during times when I want to unwind and take a break from being productive.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero