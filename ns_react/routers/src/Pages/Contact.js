import React from 'react';
import { useParams } from 'react-router-dom';

export default function Contact() {
  const { id, token } = useParams();
  return (
    <div>
      <h1>Contact</h1>
      <h2>Welcome to info {id}</h2>
      <h2>Welcome to info {token}</h2>
    </div>
  );
}
