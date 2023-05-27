import { useEffect, useMemo, useRef, useState } from "react";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  WMSTileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { LatLngTuple } from "leaflet";

export const Map = ({
  width,
  height,
  center,
  zoom,
  setPosition,
}: {
  width: string;
  height: string;
  center: LatLngTuple;
  zoom: number;
  setPosition: Function;
}) => {
  return (
    <MapContainer
      zoom={zoom}
      minZoom={2}
      maxZoom={10}
      center={center}
      style={{ width: width, height: height, zIndex: 3 }}
      maxBoundsViscosity={1.0}
      id="mapid"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data © OpenStreetMap contributors"
      />
      <WMSTileLayer
        url="http://sistemas.gt4w.com.br/geoserver/processo_seletivo/wms"
        layers="processo_seletivo:ufs_brasil"
        format="image/png"
        transparent={true}
        attribution="WMS para buscar as geometrias dos UFs"
      />
      <Marker
        draggable={true}
        eventHandlers={{
          dragend: (e) =>
            setPosition([
              e.target._latlng.lat,
              e.target._latlng.lng,
            ] as LatLngTuple),
        }}
        position={center}
        icon={L.icon({
          iconUrl:
            "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
          iconSize: [25, 41],
          iconAnchor: [12.5, 41],
          popupAnchor: [0, -41],
          shadowSize: [41, 41],
          shadowAnchor: [12.5, 41],
        })}
      >
        {/* <Popup minWidth={90}>
          <span>Marker is draggable</span>
        </Popup> */}
      </Marker>
    </MapContainer>
  );
};
