import React from 'react';
// import women1 from '../../assets/Images/women1.png';
import Courses from './Courses';
import Page1 from './Page1';
import Navbar from '@/components/Shared/Navbar';
const Home = () => {
    return (
        <>
           {/* <div className='h-full w-[100vw] flex flex-col md:flex-row items-center px-3 py-7 md:px-10 mt-10 md:mt-0 overflow-x-hidden'>
            <img src={women1} alt="Hero" style={{marginLeft:'10rem'}} className='h-96 w-80'/>
            <div className='flex-1 flex flex-col items-start ml-64 md:ml-15'>
                <h1 className='font-bold text-2xl md:text-3xl text-center md:text-left mt-2 mb-4 max-w-lg'>
                    Anytime Anywhere Learn on your Suitable Schedule
                </h1>
                <p className='w-96'>
                    Your future, your choice. Enjoy personalized learning experiences designed to help you achieve your goals and unlock your potential.
                </p>
            </div>
        </div> */}
        {/* <div className='py-11'>
            <h1 className='text-center font-bold text-2xl md:text-3xl'>Courses</h1>
        </div> */}
        <div className='h-[84vh]'>
            <div className='mt-40'>
                <Page1/>
            </div>
            <div className='mt-10'>
                <Courses/>
            </div>
        </div>
        </>
    );
}

export default Home;

// import React from 'react';
// import hero from '../../assets/Images/hero.png';

// const Home = () => {
//     return (
//         <div className='h-full w-full flex flex-col md:flex-row items-center px-4 py-8 md:px-16 mt-20 md:mt-0'>
//             <div className='flex-1 flex flex-col items-start ml-5 md:ml-15'>
//                 <h1 className='font-bold text-2xl md:text-3xl text-center md:text-left mt-2 mb-4 max-w-lg'>
//                     Anytime Anywhere Learn on your Suitable Schedule
//                 </h1>
//                 <p className='max-w-lg'>
//                     Your future, your choice. Enjoy personalized learning experiences designed to help you achieve your goals and unlock your potential.
//                 </p>
//             </div>
//             <img src={hero} alt="Hero" style={{marginLeft:'10rem'}} className='h-90 w-96'/>
//         </div>
//     );
// }

// export default Home;
