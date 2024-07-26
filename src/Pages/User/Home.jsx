import React from 'react';
import OpaqueCircle from '@/components/round';
import TopCourses from './Courses';
import SearchSection from './Search';

const HomePage = () => {
  return (
    <>
      <div className="h-screen flex">
        <div className="w-1/2 h-full bg-no-repeat bg-left bg-contain" style={{ backgroundImage: `url('/src/assets/images/background.png')` }}>
          {/* Background image will be here */}
        </div>
        <div className="w-1/2 h-full flex flex-col items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-20 dark:text-white">Welcome to E-Learning Website</h1>
            <p className="text-lg dark:text-white mb-40 leading-10 font-semibold">
              Unlock the potential of online education with our cutting-edge e-learning platform, designed to enhance your academic journey and support your pursuit of knowledge anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
      {/* Render multiple circles with random positions */}
      <OpaqueCircle top={17} left={83} />
      <OpaqueCircle top={80} left={4} />
      {/* <OpaqueCircle top={80} left={77} />
      <OpaqueCircle top={90} left={36} /> */}
      <TopCourses/>
      <SearchSection/>
    </>
  );
};

export default HomePage;
