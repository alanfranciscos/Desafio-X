import { Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import L from "leaflet";

export const Maker = ({
  location,
  setPosition,
  extraData,
}: {
  location: LatLngTuple;
  setPosition: Function;
  extraData: ClientProps | null;
}) => {
  return (
    <Marker
      position={location}
      draggable={setPosition ? true : false}
      eventHandlers={{
        dragend: (e) =>
          setPosition([
            e.target._latlng.lat,
            e.target._latlng.lng,
          ] as LatLngTuple),
      }}
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
      {!setPosition && extraData && (
        <Popup minWidth={90}>
          <span>cliente: {extraData?.nome}</span>
        </Popup>
      )}
    </Marker>
  );
};

Maker.defaultProps = {
  listItens: false,
  setPosition: null,
  extraData: null,
};
