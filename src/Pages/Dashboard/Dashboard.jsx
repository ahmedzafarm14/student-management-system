import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import StudentForm from '../../Components/StudentForm/StudentForm.jsx';
import StudentList from '../../Components/StudentGrid/StudentGrid.jsx';

const Dashboard = () => {
  return (
    <div className="flex">
      <nav className="w-1/5 bg-gray-800 text-white h-screen p-5">
        <h2 className="text-2xl mb-4">Dashboard</h2>
        <ul>
          <li className="mb-2">
            <Link to="add-student">Add Student</Link>
          </li>
          <li className="mb-2">
            <Link to="students">Student List</Link>
          </li>
        </ul>
      </nav>
      <div className="w-4/5 p-5">
        <Routes>
          <Route path="add-student" element={<StudentForm />} />
          <Route path="students" element={<StudentList />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
