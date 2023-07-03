import { useEffect, useState } from "react";
import {
  Container,
  FooterContainer,
  LoaderContainer,
  SelectPage,
  TableContainer,
  TableTitle,
} from "./styles";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
} from "react-icons/bs";
import { Button } from "./components/Button";
import { ModalClient } from "../Client/ModalTable";
import { Loader } from "../StatusRequest/Loader";
import { v4 as uuidv4 } from "uuid";
import { ModalSale } from "../Sales/ModalTable";

type FilterPropsType = {
  atualPage: number;
  sorted: string;
  sortOrder: string;
};

type TablePropsType = {
  data: any[];
  dataKeys: String[];
  filter: FilterPropsType;
  setFilter: Function;
  numberOfPages: number;
  totalElements: number;
  id: string;
};

export const Table = ({
  data,
  dataKeys,
  setFilter,
  filter,
  numberOfPages,
  totalElements,
  id,
}: TablePropsType) => {
  const [arrowDirection, setArrowDirection] = useState(
    new Array(...dataKeys)?.fill("Down", 0, dataKeys?.length)
  );

  const uuid = uuidv4();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [coordinatesClick, setCoordinatesClick] = useState({
    x: 0,
    y: 0,
  });

  const [pages, setPages] = useState([0]);

  const [itemSelected, setItemSelected] = useState("");

  useEffect(() => {
    const pages = [];
    for (let i = 0; i < numberOfPages; i++) {
      pages.push(i + 1);
    }
    setPages(pages);
  }, [numberOfPages]);

  const handleArrowDirection = (index: number, value: String) => {
    let i = 0;
    const aux = [];
    while (i < arrowDirection?.length) {
      if (i === index) {
        let direction = null;
        if (arrowDirection[i] === "Up") {
          direction = "Down";
          aux.push(direction);
        } else {
          direction = "Up";
          aux.push(direction);
        }
      } else {
        aux.push("Down");
      }
      i = i + 1;
    }
    setArrowDirection(aux);
  };

  const handleSortOrder = () => {
    if (filter?.sortOrder === "asc") {
      return "desc";
    }
    return "asc";
  };

  const selectModal = () => {
    if (id === "id") {
      return (
        <ModalSale
          coordinates={coordinatesClick}
          closeModal={() => setModalIsOpen(false)}
          id={itemSelected}
        />
      );
    }
    return (
      <ModalClient
        coordinates={coordinatesClick}
        closeModal={() => setModalIsOpen(false)}
        id={itemSelected}
      />
    );
  };

  return (
    <>
      <Container id="container">
        {modalIsOpen ? selectModal() : null}
        <TableTitle>Clientes cadastrados</TableTitle>
        {data?.length && dataKeys?.length && totalElements !== -1 ? (
          <>
            <TableContainer>
              <thead className="thead">
                <tr key={uuid}>
                  {dataKeys?.map((value, index) => (
                    <th
                      key={index}
                      onClick={() => {
                        if (value === filter?.sorted) {
                          setFilter((prevState: any) => ({
                            ...prevState,
                            sorted: value,
                            sortOrder: handleSortOrder(),
                          }));
                          handleArrowDirection(index, value);
                        } else {
                          setFilter((prevState: any) => ({
                            ...prevState,
                            sortOrder: "asc",
                            sorted: value,
                          }));
                          handleArrowDirection(index, value);
                        }
                      }}
                    >
                      {value}
                      {arrowDirection[index] === "Down" ? (
                        <IoIosArrowDown />
                      ) : (
                        <IoIosArrowUp />
                      )}
                    </th>
                  ))}
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody key={uuid}>
                {data?.map((item, index) => {
                  return (
                    <tr key={index}>
                      {dataKeys.map((value) => (
                        <td key={item?.[value.toLowerCase()]}>
                          {item?.[value.toLowerCase()]}
                        </td>
                      ))}
                      <Button
                        openModal={(event: any) => {
                          setCoordinatesClick({
                            x: event?.clientX,
                            y: event?.clientY,
                          });
                          setModalIsOpen(true);
                          setItemSelected(item[id]);
                        }}
                      >
                        Ações
                        <IoIosArrowDown />
                      </Button>
                    </tr>
                  );
                })}
              </tbody>
            </TableContainer>
            <FooterContainer>
              <p>{`Exibindo de ${(filter?.atualPage + 1) * 10 - 9} a ${
                (filter?.atualPage + 1) * 10 > totalElements
                  ? totalElements
                  : (filter?.atualPage + 1) * 10
              } de ${totalElements} registros`}</p>
              <SelectPage>
                <BsChevronDoubleLeft
                  onClick={() =>
                    setFilter({
                      ...filter,
                      atualPage: 0,
                    })
                  }
                />
                <BsChevronCompactLeft
                  onClick={() =>
                    setFilter({
                      ...filter,
                      atualPage:
                        filter?.atualPage - 1 < 0
                          ? filter?.atualPage
                          : filter?.atualPage - 1,
                    })
                  }
                />
                {pages?.map((i) => {
                  return (
                    <p
                      key={i}
                      className={pages?.length === i ? "last-item" : "item"}
                      onClick={() =>
                        setFilter({
                          ...filter,
                          atualPage: i - 1,
                        })
                      }
                    >
                      {i}
                    </p>
                  );
                })}
                <BsChevronCompactRight
                  onClick={() =>
                    setFilter({
                      ...filter,
                      atualPage:
                        filter?.atualPage + 1 >= numberOfPages
                          ? filter?.atualPage
                          : filter?.atualPage + 1,
                    })
                  }
                />
                <BsChevronDoubleRight
                  onClick={() =>
                    setFilter({
                      ...filter,
                      atualPage: numberOfPages - 1,
                    })
                  }
                />
              </SelectPage>
            </FooterContainer>
          </>
        ) : (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        )}
      </Container>
    </>
  );
};
