import React from 'react';

const AdminAddCourse = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 border-2 border-blue-200 shadow-md rounded-lg bg-white dark:bg-slate-700">
        <h2 className="text-2xl font-bold text-center text-black dark:text-white">Add Course</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="courseName" className="block text-sm font-medium text-black dark:text-white">Course Name</label>
            <input type="text" id="courseName" name="courseName" required className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-slate-200" />
          </div>
          <div>
            <label htmlFor="instructor" className="block text-sm font-medium text-black dark:text-white">Instructor</label>
            <input type="text" id="instructor" name="instructor" required className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-slate-200" />
          </div>
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-black dark:text-white">Duration (weeks)</label>
            <input type="number" id="duration" name="duration" required className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-slate-200" />
          </div>
          <div>
            <label htmlFor="ratings" className="block text-sm font-medium text-black dark:text-white">Ratings</label>
            <input type="text" id="ratings" name="ratings" required className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-slate-200" />
          </div>
          <div>
            <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">Add Course</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminAddCourse;
