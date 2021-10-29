import React from 'react';
import TestNeo from './components/TestNeo';
import NeoInfo from './Neo';

function CelestObjects() {
  return (
    <div>
      {NeoInfo.map((objets) => (
        <TestNeo
          name={objets.name}
          id={objets.id}
          absolute_magnitude_h={objets.absolute_magnitude_h}
          neo_reference_id={objets.neo_reference_id}
        />
      ))}
    </div>
  );
}

export default CelestObjects;
