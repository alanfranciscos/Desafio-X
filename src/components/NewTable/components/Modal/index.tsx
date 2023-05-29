import { useEffect, useState } from "react";

import { Container, ModalContent } from "./styles";

type CoordinatesType = {
  x: number;
  y: number;
};

export const Modal = ({
  closeModal,
  coordinates,
}: {
  closeModal: Function;
  coordinates: CoordinatesType;
}) => {
  const [modal, setModal] = useState(document?.getElementById("modal"));

  useEffect(() => {
    setModal(document?.getElementById("modal"));
  }, []);

  console.log(coordinates);

  return (
    <Container
      id="modal"
      onClick={(event) => {
        if (event.target === modal && modal) {
          closeModal();
        }
      }}
    >
      <ModalContent
        style={{ top: coordinates?.y, left: coordinates?.x - 300 }}
      ></ModalContent>
    </Container>
  );
};
