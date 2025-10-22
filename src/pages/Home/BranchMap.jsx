// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import branchesData from '../../data/branches.json';


// export default function BranchMap() {
//   const [userLocation, setUserLocation] = useState(null);
//   const [selectedBranch, setSelectedBranch] = useState(null);
//   const [path, setPath] = useState([]);

//   // Get User Location
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((pos) => {
//       setUserLocation([pos.coords.latitude, pos.coords.longitude]);
//     });
//   }, []);

//   // When a branch is selected, draw a line
//   useEffect(() => {
//     if (userLocation && selectedBranch) {
//       setPath([userLocation, [selectedBranch.lat, selectedBranch.lng]]);
//     }
//   }, [selectedBranch, userLocation]);

//   return (
//     <div className="mt-20">
//       <h2 className="text-center text-xl font-bold mb-4">Find Nearest Branch on your location red mark , brach green mark</h2>
   //  <p>Branch: Banani Branch ,Dhanmondi Branch, Uttara Branch,Agrabad Branch, GEC Branch, Zindabazar Branch,Amberkhana Branch</p>

//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search branch by name..."
//         onChange={(e) => {
//           const term = e.target.value.toLowerCase();
//           for (let d of branchesData) {
//             for (let b of d.branches) {
//               if (b.name.toLowerCase().includes(term)) {
//                 setSelectedBranch(b);
//                 return;
//               }
//             }
//           }
//         }}
//         className="border p-2 w-80 mb-4 block mx-auto rounded-lg"
//       />

//       {/* Map */}
//       <MapContainer
//         center={[23.685, 90.3563]}
//         zoom={7}
//         style={{ height: '600px', width: '90%', margin: 'auto', borderRadius: '16px' }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {/* User Location */}
//         {userLocation && (
//           <Marker position={userLocation}>
//             <Popup>You are here</Popup>
//           </Marker>
//         )}

//         {/* Branches */}
//         {branchesData.map((d, i) =>
//           d.branches.map((b, j) => (
//             <Marker key={`${i}-${j}`} position={[b.lat, b.lng]}>
//               <Popup>
//                 <b>{b.name}</b> <br /> {d.district}
//                 <br />
//                 <button
//                   onClick={() => setSelectedBranch(b)}
//                   className="bg-blue-500 text-white px-2 py-1 rounded mt-1"
//                 >
//                   Show Direction
//                 </button>
//               </Popup>
//             </Marker>
//           ))
//         )}

//         {/* Path Line */}
//         {path.length > 0 && <Polyline positions={path} color="blue" />}
//       </MapContainer>
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import branchesData from '../../data/branches.json';

// // Custom Icons
// const userIcon = new L.Icon({
//   iconUrl: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png', // red icon
//   iconSize: [35, 35],
//   iconAnchor: [17, 35],
//   popupAnchor: [0, -35],
// });

// const branchIcon = new L.Icon({
//   iconUrl: 'https://cdn-icons-png.flaticon.com/512/854/854866.png', // green icon
//   iconSize: [30, 30],
//   iconAnchor: [15, 30],
//   popupAnchor: [0, -30],
// });

// export default function BranchMap() {
//   const [userLocation, setUserLocation] = useState(null);
//   const [selectedBranch, setSelectedBranch] = useState(null);
//   const [path, setPath] = useState([]);

//   // Get User Location
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((pos) => {
//       setUserLocation([pos.coords.latitude, pos.coords.longitude]);
//     });
//   }, []);

//   // When a branch is selected, draw a line
//   useEffect(() => {
//     if (userLocation && selectedBranch) {
//       setPath([userLocation, [selectedBranch.lat, selectedBranch.lng]]);
//     }
//   }, [selectedBranch, userLocation]);

//   return (
//     <div className="mt-20">
//       <h2 className="text-center text-2xl font-bold mb-4">
//         Find Nearest Branch (Your location )
//       </h2>
//       

//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search branch by name...Enter"
//         onChange={(e) => {
//           const term = e.target.value.toLowerCase();
//           for (let d of branchesData) {
//             for (let b of d.branches) {
//               if (b.name.toLowerCase().includes(term)) {
//                 setSelectedBranch(b);
//                 return;
//               }
//             }
//           }
//         }}
//         className="border p-2 w-80 mb-4 block mx-auto rounded-lg"
//       />

//       {/* Map */}
//       <MapContainer
//         center={[23.685, 90.3563]}
//         zoom={7}
//         style={{ height: '600px', width: '90%', margin: 'auto', borderRadius: '16px' }}
//       >
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//         {/* User Location */}
//         {userLocation && (
//           <Marker position={userLocation} icon={userIcon}>
//             <Popup>You are here</Popup>
//           </Marker>
//         )}

//         {/* Branches */}
//         {branchesData.map((d, i) =>
//           d.branches.map((b, j) => (
//             <Marker key={`${i}-${j}`} position={[b.lat, b.lng]} icon={branchIcon}>
//               <Popup>
//                 <b>{b.name}</b> <br /> {d.district}
//                 <br />
//                 <button
//                   onClick={() => setSelectedBranch(b)}
//                   className="bg-blue-500 text-white px-2 py-1 rounded mt-1"
//                 >
//                   Show Direction
//                 </button>
//               </Popup>
//             </Marker>
//           ))
//         )}

//         {/* Path Line */}
//         {path.length > 0 && <Polyline positions={path} color="blue" />}
//       </MapContainer>
//     </div>
//   );
// }






import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import branchesData from '../../data/branches.json';

// Custom Icons
const userIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png', // red icon
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
});

const branchIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/854/854866.png', // green icon
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

// Haversine formula for distance in km
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d.toFixed(2);
}

export default function BranchMap() {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [path, setPath] = useState([]);
  const [distance, setDistance] = useState(null);

  // Get User Location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setUserLocation([pos.coords.latitude, pos.coords.longitude]);
    });
  }, []);

  // When a branch is selected, draw a line and calculate distance
  useEffect(() => {
    if (userLocation && selectedBranch) {
      setPath([userLocation, [selectedBranch.lat, selectedBranch.lng]]);
      const d = getDistanceFromLatLonInKm(
        userLocation[0],
        userLocation[1],
        selectedBranch.lat,
        selectedBranch.lng
      );
      setDistance(d);
    }
  }, [selectedBranch, userLocation]);

  return (
    <div className="mt-20">
      <h2 className="text-center text-2xl font-bold mb-2 text-orange-500" >
        Find Nearest Branch Distance from ( Your location )
      </h2>
      <p className="text-center text-xl font-bold mb-4">Branchs: Banani Branch ,Dhanmondi Branch, Uttara Branch,Agrabad Branch, GEC Branch, Zindabazar Branch,Amberkhana Branch</p>
      {selectedBranch && distance && (
        <p className="text-center text-xl font-semibold mb-4">
          Distance from your location to <b>{selectedBranch.name}</b>: {distance} km
        </p>
      )}

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search branch by name...Enter"
        onChange={(e) => {
          const term = e.target.value.toLowerCase();
          for (let d of branchesData) {
            for (let b of d.branches) {
              if (b.name.toLowerCase().includes(term)) {
                setSelectedBranch(b);
                return;
              }
            }
          }
        }}
        className="border p-2 w-80 mb-4 block mx-auto rounded-lg"
      />

      {/* Map */}
      <MapContainer
        center={[23.685, 90.3563]}
        zoom={7}
        style={{ height: '600px', width: '90%', margin: 'auto', borderRadius: '16px' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* User Location */}
        {userLocation && (
          <Marker position={userLocation} icon={userIcon}>
            <Popup>You are here</Popup>
          </Marker>
        )}

        {/* Branches */}
        {branchesData.map((d, i) =>
          d.branches.map((b, j) => (
            <Marker key={`${i}-${j}`} position={[b.lat, b.lng]} icon={branchIcon}>
              <Popup>
                <b>{b.name}</b> <br /> {d.district}
                <br />
                <button
                  onClick={() => setSelectedBranch(b)}
                  className="bg-blue-500 text-white px-2 py-1 rounded mt-1"
                >
                  Show Direction
                </button>
              </Popup>
            </Marker>
          ))
        )}

        {/* Path Line */}
        {path.length > 0 && <Polyline positions={path} color="blue" />}
      </MapContainer>
    </div>
  );
}
