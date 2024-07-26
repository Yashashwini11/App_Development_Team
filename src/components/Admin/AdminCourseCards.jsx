import React from 'react';

const AdminCourseCard = ({ name, duration, ratings, instructor }) => {
  return (
    <div className="p-6 border border-blue-400 rounded-lg shadow-md w-full md:w-[320px]">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="dark:text-white mb-2">Duration: {duration}</p>
      <p className="dark:text-white mb-2">Ratings: {ratings}</p>
      <p className="dark:text-white mb-4">Instructor: {instructor}</p>
      <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-blue-600">Delete</button>
    </div>
  );
};

export default AdminCourseCard;
