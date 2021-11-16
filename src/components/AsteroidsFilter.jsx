// import { useState } from 'react';
// import NeoCard from './NeoCard';

// function AsteroidsFilter({ asteroid, filterbutton }) {
//   const [showAsteroids, setShowAsteroids] = useState(false);
//   const [filterObjects, setFilterObjects] = useState(false);
//   const [filterObjectsBig, setFilterObjectsBig] = useState(false);

//   const hideAllNeoCard = () => {
//     setFilterObjects(true);
//     setShowAsteroids(false);
//     setFilterObjectsBig(false);
//   };

//   const hideFilterObject = () => {
//     setShowAsteroids(false);
//     setFilterObjectsBig(true);
//     setFilterObjects(false);
//   };

//   return (
//     <div>
//       <div>
//         <button type="button" onClick={hideAllNeoCard}>
//           Afficher les comètes les plus dangereuses
//         </button>
//         <button type="button" onClick={hideFilterObject}>
//           Afficher les comètes les plus grandes
//         </button>
//         {!filterObjects && showAsteroids
//           ? asteroid.map((asteroidfilter) => <NeoCard asteroid={asteroidfilter} />)
//           : null}

//         {filterObjects && !showAsteroids
//           ? asteroid
//             .filter((el) => el.is_potentially_hazardous_asteroid)
//             .map((asteroidfilter) => <NeoCard asteroid={asteroidfilter} />)
//           : null}

//         {filterObjectsBig && !showAsteroids
//           ? asteroid
//             .filter(
//               (el) => el.estimated_diameter.meters.estimated_diameter_max
//                   > 631.0154296359,
//             )
//             .map((asteroidfilter) => <NeoCard asteroid={asteroidfilter} />)
//           : null}
//       </div>
//     </div>
//   );
// }

// export default AsteroidsFilter;
