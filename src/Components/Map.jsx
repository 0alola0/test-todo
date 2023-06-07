import React from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) =>   <div style={{ color: 'red', fontWeight: 'bold' }}>
{text}
<img
  src="marker.png"
  alt="Marker"
  style={{ width: '20px', height: '20px', marginLeft: '5px' }}
/>
</div>;


const GMap = () => {

    const defaultProps = {
        center: {
            lat: 2.0469,
            lng: 45.3182
          },
        zoom: 11
      };

  return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
  );
}

export default GMap;
