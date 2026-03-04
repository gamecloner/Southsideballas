import { MapContainer, TileLayer, Polygon, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { CRS, icon } from 'leaflet';
import ballasLogo from '../assets/ballas-logo.png';

const ballasTerritory = {
  color: '#800080',
  positions: [
    [-209.21779092181853, 121.015625],
    [-210, 122],
    [-210.74798485820298, 122.6875],
    [-212, 121.5],
    [-213.82398695481254, 120.28125],
    [-214.58908392300478, 120.15625],
    [-214.58908392300478, 119.171875],
    [-214, 118.9],
    [-213.57415937336202, 118.75],
    [-213, 118],
    [-212.55923482371927, 117.59375],
    [-211.5, 116],
    [-210.65429951515904, 115.078125],
    [-209.8, 114],
    [-209.1241055787746, 113.671875],
    [-208.5, 114.5],
    [-207.96865301456592, 115.90625],
    [-208.5, 116.5],
    [-209.01480601189, 117],
    [-210, 118],
    [-210.7792133058843, 119.171875]
  ]
};

const ballasIcon = icon({
  iconUrl: ballasLogo,
  iconSize: [60, 60],
});

const TerritoryMap = () => {
  const pathOptions = {
    color: ballasTerritory.color,
    fillColor: ballasTerritory.color,
    fillOpacity: 0.4,
    weight: 3,
    lineJoin: 'round',
    dashArray: '5, 5'
  };

  return (
    <div className="relative border-gray-800 rounded-2xl shadow-lg">
      <div
        style={{ height: '60vh', width: '100%' }}
        className="overflow-hidden rounded-2xl" 
      >
        <MapContainer
          center={[-211.95, 118.84]} 
          zoom={6}
          style={{ height: '100%', width: '100%', backgroundColor: '#12a7d2' }}
          scrollWheelZoom={true}
          zoomControl={false}
          attributionControl={true}
          crs={CRS.Simple}
        >
          <TileLayer
            url="https://compromit.github.io/gta5-map/assets/map/tiles-atlas/{z}/{x}/{y}.png"
            noWrap={true}
            attribution="<a href='https://github.com/compromit'>Compromit</a>"
          />
          <Polygon pathOptions={pathOptions} positions={ballasTerritory.positions} />
          <Marker position={[-211.95, 118.84]} icon={ballasIcon} />
        </MapContainer>
      </div>
      <div className="absolute bottom-4 left-4 z-[1000] bg-black/50 text-white px-3 py-1 rounded-full flex items-center">
        <span className="w-3 h-3 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
        <span className="uppercase tracking-wider font-medium text-sm">ACTIVE CONTROL AREA</span>
      </div>
    </div>
  );
};

export default TerritoryMap;