import React from 'react';

const TestNeo = ({
  name,
  id,
  absolute_magnitude_h: mag,
  neo_reference_id: neoRef,
}) => (
  <div>
    <h3>name: {name}</h3>
    <h3>id: {id}</h3>
    <h3>magnitude: ({mag})</h3>
    <h3>neoRef: ({neoRef})</h3>
  </div>
);

export default TestNeo;
