import React from 'react';

const TestNeo = ({
  name,
  id,
  absolute_magnitude_h: magnitude,
  neo_reference_id: neoid,
}) => (
  <div>
    <h3>name: {name}</h3>
    <h3>id: {id}</h3>
    <h3>magnitude: {magnitude}</h3>
    <h3>neooo: {neoid}</h3>
  </div>
);

export default TestNeo;
