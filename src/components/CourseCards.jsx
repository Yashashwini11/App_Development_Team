import React from 'react';

const UserCourseCard = ({ id, name, progress }) => {
  return (
    <div className="course-card p-4 light:bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-bold mb-2">{name || 'Unnamed Course'}</h3> {/* Fallback if name is missing */}
      <p>Progress: {progress || 0}%</p>
      {/* Add more course details as needed */}
    </div>
  );
};

export default UserCourseCard;
