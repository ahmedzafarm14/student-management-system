import React, { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      const querySnapshot = await getDocs(collection(db, 'students'));
      const studentsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudents(studentsData);
    };

    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'students', id));
    setStudents(students.filter((student) => student.id !== id));
  };

  const filteredStudents = students.filter((student) =>
    student.phone.includes(search)
  );

  const handleExportToPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ['Roll No', 'Name', 'Father', 'CNIC', 'Phone', 'Class'];
    const tableRows = [];

    students.forEach((student) => {
      const studentData = [
        student.rollNo,
        student.name,
        student.father,
        student.cnic,
        student.phone,
        student.studentClass,
      ];
      tableRows.push(studentData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });
    doc.text('Student List', 14, 15);
    doc.save('student_list.pdf');
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Student List</h2>
      <input
        type="text"
        placeholder="Search by phone number"
        className="mb-4 p-2 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="bg-green-500 text-white px-2 py-1 rounded mb-4"
        onClick={handleExportToPDF}
      >
        Export to PDF
      </button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Roll No</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Father</th>
            <th className="py-2 px-4 border">CNIC</th>
            <th className="py-2 px-4 border">Phone</th>
            <th className="py-2 px-4 border">Class</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td className="py-2 px-4 border">{student.rollNo}</td>
              <td className="py-2 px-4 border">{student.name}</td>
              <td className="py-2 px-4 border">{student.father}</td>
              <td className="py-2 px-4 border">{student.cnic}</td>
              <td className="py-2 px-4 border">{student.phone}</td>
              <td className="py-2 px-4 border">{student.studentClass}</td>
              <td className="py-2 px-4 border">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
