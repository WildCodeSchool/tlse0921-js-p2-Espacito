import React from 'react';
import TestNeo from './components/TestNeo';
import NeoInfo from './Neo';

export default function App() {
  return (
    <div>
      <h1>marre de cet api</h1>
      <div>
        {NeoInfo.map((objets) => (
          <TestNeo
            name={objets.name}
            id={objets.id}
            magnitude={objets.absolute_magnitude_h}
            neo={objets.neo_reference_id}
          />
        ))}
      </div>
    </div>
  );
}
