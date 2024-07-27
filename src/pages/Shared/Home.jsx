// import React from 'react';
// // import women1 from '../../assets/Images/women1.png';
// import Courses from './Courses';
// import Page1 from './Page1';
// import Navbar from '@/components/Shared/Navbar';
// const Home = () => {
//     return (
//         <>
//             <div className='h-[84vh]'>
//                 <div className='mt-40'>
//                     <Page1/>
//                 </div>
//                 <div className='mt-10'>
//                     <Courses/>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Home;

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Courses from './Courses';
import Page1 from './Page1';
import '../../assets/css/Home.css';

const Home = () => {
  return (
    <AnimatePresence>
      <motion.div
        className='h-[84vh]'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }} // Overall container animation
      >
        <motion.div
          className='mt-40'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }} // Duration for Page1
        >
          <Page1 />
        </motion.div>

        <motion.div
          className='mt-10'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 4 }} // Duration for Courses
        >
          <Courses />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
