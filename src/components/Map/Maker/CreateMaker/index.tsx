import { Maker } from "..";
import { LatLngTuple } from "leaflet";

export const CreateMaker = ({
  location,
  setLocation,
}: {
  location: LatLngTuple;
  setLocation: Function;
}) => {
  return (
    <Maker
      location={location}
      setPosition={(value: LatLngTuple) => {
        setLocation(value);
      }}
    />
  );
};
