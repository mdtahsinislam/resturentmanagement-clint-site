// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// import ridersData from '../../data/riders.json';
// // Custom Icons
// const userIcon = new L.Icon({
//   iconUrl: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png', // red icon
//   iconSize: [35, 35],
//   iconAnchor: [17, 35],
//   popupAnchor: [0, -35],
// });

// const riderIcon = new L.Icon({
//   iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // green rider icon
//   iconSize: [30, 30],
//   iconAnchor: [15, 30],
//   popupAnchor: [0, -30],
// });

// // Haversine formula distance in km
// function getDistance(lat1, lon1, lat2, lon2) {
//   const R = 6371;
//   const dLat = ((lat2 - lat1) * Math.PI) / 180;
//   const dLon = ((lon2 - lon1) * Math.PI) / 180;
//   const a =
//     Math.sin(dLat/2)**2 + Math.cos(lat1 * Math.PI/180) * Math.cos(lat2 * Math.PI/180) * Math.sin(dLon/2)**2;
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   return (R * c).toFixed(2);
// }

// export default function RiderMap() {
//   const [userLocation, setUserLocation] = useState(null);
//   const [selectedRider, setSelectedRider] = useState(null);
//   const [path, setPath] = useState([]);
//   const [distance, setDistance] = useState(null);

//   // Get user location
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(pos => {
//       setUserLocation([pos.coords.latitude, pos.coords.longitude]);
//     });
//   }, []);

//   // Draw path and calculate distance
//   useEffect(() => {
//     if(userLocation && selectedRider) {
//       setPath([userLocation, [selectedRider.lat, selectedRider.lng]]);
//       setDistance(getDistance(userLocation[0], userLocation[1], selectedRider.lat, selectedRider.lng));
//     }
//   }, [selectedRider, userLocation]);

//   return (
//     <div className="mt-20">
//       <h2 className="text-center text-2xl font-bold mb-2">Nearest Rider Locator</h2>
//       {selectedRider && distance && (
//         <p className="text-center font-semibold mb-4">
//           Distance to <b>{selectedRider.name}</b>: {distance} km
//         </p>
//       )}

//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search rider by name..."
//         onChange={e => {
//           const term = e.target.value.toLowerCase();
//           for (let d of ridersData) {
//             for (let r of d.riders) {
//               if(r.name.toLowerCase().includes(term)) {
//                 setSelectedRider(r);
//                 return;
//               }
//             }
//           }
//         }}
//         className="border p-2 w-80 mb-4 block mx-auto rounded-lg"
//       />

//       <MapContainer
//         center={[23.685, 90.3563]}
//         zoom={7}
//         style={{height:'600px', width:'90%', margin:'auto', borderRadius:'16px'}}
//       >
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//         {/* User */}
//         {userLocation && (
//           <Marker position={userLocation} icon={userIcon}>
//             <Popup>Your Location</Popup>
//           </Marker>
//         )}

//         {/* Riders */}
//         {ridersData.map((d,i) =>
//           d.riders.map((r,j) => (
//             <Marker key={`${i}-${j}`} position={[r.lat,r.lng]} icon={riderIcon}>
//               <Popup>
//                 <b>{r.name}</b><br />
//                 Phone: {r.phone}<br/>
//                 <button onClick={()=>setSelectedRider(r)} className="bg-blue-500 text-white px-2 py-1 rounded mt-1">
//                   Show Direction
//                 </button>
//               </Popup>
//             </Marker>
//           ))
//         )}

//         {/* Path */}
//         {path.length>0 && <Polyline positions={path} color="blue" />}
//       </MapContainer>
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import ridersData from '../../data/riders.json';

// User icon
const userIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png', // red icon
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
});

// Rider icon as red marker with name+phone label
function createRiderIcon(rider) {
  return L.divIcon({
    className: 'custom-rider-icon',
    html: `
      <div style="position: relative; display: flex; flex-direction: column; align-items: center;">
        <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" style="width: 30px; height: 30px;" />
        <span style="background: white; padding: 2px 5px; border-radius: 4px; font-size: 12px; font-weight: bold; white-space: nowrap; margin-top: 2px; box-shadow: 0px 0px 3px #00000080;">
          ${rider.name} (${rider.phone})
        </span>
      </div>
    `,
    iconSize: [100, 40],
    iconAnchor: [15, 35],
    popupAnchor: [0, -35],
  });
}

// Haversine formula distance in km
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(2);
}

export default function RiderMap() {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedRider, setSelectedRider] = useState(null);
  const [path, setPath] = useState([]);
  const [distance, setDistance] = useState(null);

  // Get user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setUserLocation([pos.coords.latitude, pos.coords.longitude]);
    });
  }, []);

  // Draw path and calculate distance
  useEffect(() => {
    if (userLocation && selectedRider) {
      setPath([userLocation, [selectedRider.lat, selectedRider.lng]]);
      setDistance(
        getDistance(
          userLocation[0],
          userLocation[1],
          selectedRider.lat,
          selectedRider.lng
        )
      );
    }
  }, [selectedRider, userLocation]);

  return (
    <div className="mt-20">
      <h2 className="text-center text-2xl font-bold mb-2 text-orange-500">Find Nearest Rider Locator  For Fast Delivery</h2>
      <p className='text-center text-xl font-bold mb-2'>IF you click red mark white label you found Rider Name and Phon number <br/> Then Click white label you found Nearest Rider Distance you can manage Rider for Fast Food Delivery</p>
      {selectedRider && distance && (
        <p className="text-center font-semibold mb-4">

          Distance From Your location to <b><span className='text-cyan-500'>{selectedRider.name}</span></b> : {distance} km
        </p>
      )}

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search rider by name..."
        onChange={(e) => {
          const term = e.target.value.toLowerCase();
          for (let d of ridersData) {
            for (let r of d.riders) {
              if (r.name.toLowerCase().includes(term)) {
                setSelectedRider(r);
                return;
              }
            }
          }
        }}
        className="border p-2 w-80 mb-4 block mx-auto rounded-lg"
      />

      <MapContainer
        center={[23.685, 90.3563]}
        zoom={7}
        style={{ height: '600px', width: '90%', margin: 'auto', borderRadius: '16px' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* User */}
        {userLocation && (
          <Marker position={userLocation} icon={userIcon}>
            <Popup>Your Location</Popup>
          </Marker>
        )}

        {/* Riders */}
        {ridersData.map((d, i) =>
          d.riders.map((r, j) => (
            <Marker
              key={`${i}-${j}`}
              position={[r.lat, r.lng]}
              icon={createRiderIcon(r)}
            >
              <Popup>
                <b>Name : {r.name}</b>
                <br />
                Phone: {r.phone}
                <br />
                <button
                  onClick={() => setSelectedRider(r)}
                  className="bg-blue-500 text-white px-2 py-1 rounded mt-1"
                >
                  Show Direction
                </button>
              </Popup>
            </Marker>
          ))
        )}

        {/* Path */}
        {path.length > 0 && <Polyline positions={path} color="blue" />}
      </MapContainer>
    </div>
  );
}
