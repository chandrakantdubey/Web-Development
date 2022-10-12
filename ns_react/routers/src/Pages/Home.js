import React, { useEffect, useState } from 'react';

export default function Home() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const getUserDetails = async () => {
      const response = await fetch('', {
        method: 'GET',
      });
      const data = await response.json();
      setStudents(data);
    };
    getUserDetails();
  }, []);
  return (
    <div>
      <h2>Browser Router Application</h2>
      <h3>Home</h3>
      {students.map((stud, idx) => (
        <div>
          <h1>{stud.name}</h1>
        </div>
      ))}
    </div>
  );
}
