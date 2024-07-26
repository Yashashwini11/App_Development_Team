// src/components/TopCourses.jsx
import OpaqueCircle from '@/components/round';
import React from 'react';
import AdminCourseCard from './AdminCourseCards';

const courses = [
  {
    name: 'Introduction to Programming',
    duration: '6 weeks',
    ratings: '4.5/5',
    instructor: 'Sangamithra',
  },
  {
    name: 'Web Development Bootcamp',
    duration: '12 weeks',
    ratings: '4.8/5',
    instructor: 'Vishmitha',
  },

  {
    name: 'Cloud Computing',
    duration: '8 weeks',
    ratings: '4.7/5',
    instructor: 'Sonali',
  },
  {
    name: 'Machine Learning',
    duration: '10 weeks',
    ratings: '4.9/5',
    instructor: 'Aditi',
  },
  {
    name: 'Cyber Security',
    duration: '9 weeks',
    ratings: '4.6/5',
    instructor: 'Ravi',
  },
  {
    name: 'UI/UX Design',
    duration: '7 weeks',
    ratings: '4.5/5',
    instructor: 'Maya',
  },
];

const AdminCourses = () => {
  return (
    <>
      <div className=" absolute py-20 px-40">
        <h1 className="text-3xl font-bold mb-4 text-center">Courses</h1>
        <div className="border-b-4 border-blue-600 mb-16 mx-auto w-20"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
          {courses.map((course, index) => (
            <AdminCourseCard
              key={index}
              name={course.name}
              duration={course.duration}
              ratings={course.ratings}
              instructor={course.instructor}
            />
          ))}
        </div>
      </div>

    </>
  );
};

export default AdminCourses;
