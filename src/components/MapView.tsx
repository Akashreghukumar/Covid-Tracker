import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const customIcon = L.divIcon({
    className: 'custom-icon',
    html: '📍',
    iconSize: [25, 25],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24]
  });
  
const MapView = ({ data }: { data: any }) => {
  const center: [number, number] = [20.5937, 78.9629];
  const zoom = 5;

  // Format numbers with commas
  const formatNumber = (num: number) => num.toLocaleString();

  return (
    <div className="map-container">
      <h2>COVID-19 Cases by State</h2>
      <div className="map-wrapper">
        <MapContainer
          center={center}
          zoom={zoom}
          style={{ height: '600px', width: '100%' }}
          zoomControl={true}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          {data.map((state:any) => (
            <Marker
              key={state.name}
              position={[state.latitude, state.longitude]}
              icon={customIcon}
            >
              <Popup>
                <div className="popup-content">
                  <h3>{state.name}</h3>
                  <div className="stats-container">
                    <div className="stat-row">
                      <span>Total Cases:</span>
                      <span>{formatNumber(state.totalCases)}</span>
                    </div>
                    <div className="stat-row">
                      <span>Active Cases:</span>
                      <span className="active">{formatNumber(state.activeCases)}</span>
                    </div>
                    <div className="stat-row">
                      <span>Recovered:</span>
                      <span className="recovered">{formatNumber(state.recovered)}</span>
                    </div>
                    <div className="stat-row">
                      <span>Deaths:</span>
                      <span className="deaths">{formatNumber(state.deaths)}</span>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapView;

