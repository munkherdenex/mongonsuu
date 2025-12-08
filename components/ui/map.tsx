"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPin, Navigation } from "lucide-react";

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function Map() {
  const position: [number, number] = [48.204448, 108.484260];
  const facilityName = "Сүүн Мөнгөн Цацал";
  const facilityAddress = "Мөнгөнморьт сум, Монгол";

  const handleGetDirections = () => {
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`;
    window.open(mapsUrl, "_blank");
  };

  const handleOpenInMaps = () => {
    const mapsUrl = `https://www.google.com/maps?q=${position[0]},${position[1]}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <div className="space-y-4">
      {/* Info Card */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 shadow-sm">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800">{facilityName}</h3>
            <p className="text-sm text-gray-600 mt-1">{facilityAddress}</p>
            <p className="text-sm text-gray-500 mt-2">Байршил: {position[0].toFixed(4)}°N, {position[1].toFixed(4)}°E</p>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          className="w-full h-80"
          style={{ cursor: "grab" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          <Marker position={position} icon={icon}>
            <Popup className="custom-popup">
              <div className="p-2">
                <h4 className="font-semibold text-sm mb-1">{facilityName}</h4>
                <p className="text-xs text-gray-600 mb-2">{facilityAddress}</p>
                <button
                  onClick={handleOpenInMaps}
                  className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition-colors"
                >
                  Google Maps-аар үзэх
                </button>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 flex-col sm:flex-row">
        <button
          onClick={handleGetDirections}
          className="flex items-center justify-center gap-2 flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-sm"
        >
          <Navigation className="w-4 h-4" />
          Чиглэл авах
        </button>
        <button
          onClick={handleOpenInMaps}
          className="flex items-center justify-center gap-2 flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors shadow-sm"
        >
          <MapPin className="w-4 h-4" />
          Google Maps-аас нээх
        </button>
      </div>
    </div>
  );
}
