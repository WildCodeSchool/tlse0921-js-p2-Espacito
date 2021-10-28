import React from 'react';
import TestNeo from './components/TestNeo';
import NeoInfo from './components/Neo';

export default function App() {
  return (
    <div>
      <h1>marre de cet api</h1>

      <div>
        {NeoInfo.map((objets) => (
          <TestNeo key={objets.name} />
        ))}
      </div>
    </div>
  );
}
