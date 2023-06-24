import { Loader } from "./Loader";
import { Error } from "./error";
import { StatusRequestProps } from "./types";

export const StatusRequest = ({ loading, error }: StatusRequestProps) => {
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }
  return null;
};
