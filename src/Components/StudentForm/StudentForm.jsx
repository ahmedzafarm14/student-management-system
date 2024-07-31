import React, { useState } from 'react';
import { db } from '../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const StudentForm = () => {
  const [rollNo, setRollNo] = useState('');
  const [name, setName] = useState('');
  const [father, setFather] = useState('');
  const [cnic, setCnic] = useState('');
  const [phone, setPhone] = useState('');
  const [studentClass, setStudentClass] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'students'), {
        rollNo,
        name,
        father,
        cnic,
        phone,
        studentClass,
      });
      setRollNo('');
      setName('');
      setFather('');
      setCnic('');
      setPhone('');
      setStudentClass('');
      alert('Student added successfully');
    } catch (error) {
      console.error('Error adding student: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-center text-2xl mb-4">Add Student</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollNo">
          Roll No
        </label>
        <input
          type="text"
          id="rollNo"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="father">
          Father
        </label>
        <input
          type="text"
          id="father"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={father}
          onChange={(e) => setFather(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cnic">
          CNIC
        </label>
        <input
          type="text"
          id="cnic"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentClass">
          Class
        </label>
        <input
          type="text"
          id="studentClass"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={studentClass}
          onChange={(e) => setStudentClass(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Student
        </button>
      </div>
    </form>
  );
};

export default StudentForm;
