import React, { useState } from 'react';
export default function ColorComp(props) {
  const [color, setColor] = useState('olive');
  return (
    <div>
      <input
        style={{ background: color }}
        onChange={(event) => setColor(event.target.value)}
      />
      <p>{props.name}</p>
    </div>
  );
}
