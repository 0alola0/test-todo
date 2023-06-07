import React, { useState } from "react";
import { GoogleMap, MarkerF, useLoadScript,} from "@react-google-maps/api";
import { useMemo } from "react";
import Checkboxes from "./Checkboxes";

const Rmap = () => {

  const center = useMemo(() => ({ lat: 41.7151, lng: 44.829 }), []);

  const [currentFilter, setCurrentFilter] = useState([
    {value:  "restaurant", checked : false},
    {value:  "bus", checked : false},
    {value:  "atm", checked : false},
    {value:  "park", checked : false},
  ]);
  const { isLoaded, loadError } = useLoadScript({});

  const handleCheck = (e) => {
    const value  = e.target.value;
    setCurrentFilter((prevFilter) =>
      prevFilter.map((filter) =>
        filter.value === value ? { ...filter, checked: !filter.checked } : filter
      )
    );
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  return (
    <>
      {!isLoaded ? (
        <div>Loading...</div>
      ) : (
        <>
          <Checkboxes handleCheck={handleCheck} currentFilter={currentFilter}/>
          <GoogleMap
            mapContainerStyle={{ height: "400px", width: "100%" }}
            center={center}
            zoom={10}
          >
{Markers.filter((marker) => currentFilter.some((filter) => filter.value === marker.def && filter.checked)).map(
  (marker, index) => (
    <MarkerF
      key={index}
      position={{ lat: marker.lat, lng: marker.lng }}
    />
  )
)}
          </GoogleMap>
        </>
      )}
    </>
  );
};

export default Rmap;

const Markers = [
  { lat: 41.7092, lng: 44.8028, def: "restaurant" },
  { lat: 41.7125, lng: 44.7776, def: "restaurant" },
  { lat: 41.7239, lng: 44.8037, def: "restaurant" },
  { lat: 41.7061, lng: 44.7984, def: "restaurant" },
  { lat: 41.7052, lng: 44.7843, def: "bus" },
  { lat: 41.7129, lng: 44.7936, def: "bus" },
  { lat: 41.7198, lng: 44.8031, def: "bus" },
  { lat: 41.7254, lng: 44.8119, def: "bus" },
  { lat: 41.7076, lng: 44.7642, def: "atm" },
  { lat: 41.7163, lng: 44.7768, def: "atm" },
  { lat: 41.7249, lng: 44.7891, def: "atm" },
  { lat: 41.7307, lng: 44.7996, def: "atm" },
  { lat: 41.7178, lng: 44.7572, def: "park" },
  { lat: 41.7121, lng: 44.7736, def: "park" },
  { lat: 41.7244, lng: 44.7852, def: "park" },
  { lat: 41.7315, lng: 44.8008, def: "park" },
];
