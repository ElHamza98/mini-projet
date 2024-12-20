import React, { useState } from "react";
import StudentItem from "./StudentItem";

export default function StudentsList() {
  const students = [
    { id: 0, first_name: "Hamza1", last_name: "AAAA" },
    { id: 1, first_name: "Hamza2", last_name: "BBBB" },
    { id: 2, first_name: "Hamza3", last_name: "CCCC" },
  ];

 
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredStudents = students.filter(
    (student) =>
      student.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.last_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", 
        textAlign: "center",
      }}
    >
     
      <h1 style={{ marginBottom: 20 }}>Student List</h1>

    
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          marginBottom: 20,
          padding: 10,
          borderRadius: 5,
          border: "1px solid #ccc",
          fontSize: 16,
          textAlign: "center",
          width: "300px",
        }}
      />

    
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", 
          gap: "10px", 
        }}
      >
        {filteredStudents.map((std, idx) => (
          <StudentItem key={std.id} student={std} index={idx} />
        ))}
      </div>
    </div>
  );
}
