import { useState } from "react";
import {
  Container,
  FooterContainer,
  SelectPage,
  TableContainer,
  TableTitle,
} from "./styles";
import { Button } from "./components/Button";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
} from "react-icons/bs";

type TablePropsType = {
  data: any[];
  dataKeys: String[];
};

export const Table = ({ data, dataKeys }: TablePropsType) => {
  const [arrowDirection, setArrowDirection] = useState(
    new Array(...dataKeys)?.fill("Down", 0, dataKeys?.length)
  );

  const [itemSelected, setItemSelected] = useState("");

  const handleArrowDirection = (index: number, value: String) => {
    let i = 0;
    const aux = [];
    while (i < arrowDirection?.length) {
      if (i === index) {
        let direction = null;
        if (arrowDirection[i] === "Up") {
          direction = "Down";
          setItemSelected("");
          aux.push(direction);
        } else {
          direction = "Up";
          setItemSelected(String(value?.toLowerCase()));
          aux.push(direction);
        }
      } else {
        aux.push("Down");
      }
      i = i + 1;
    }
    setArrowDirection(aux);
  };

  const sortedData = () => {
    const sorted = [...data]?.sort((a, b) => {
      if (a?.[itemSelected] < b?.[itemSelected]) return -1;
      if (a?.[itemSelected] > b?.[itemSelected]) return 1;
      return 0;
    });
    return sorted;
  };

  return (
    <>
      {data?.length && dataKeys?.length ? (
        <Container>
          <TableTitle>Clientes cadastrados</TableTitle>
          <TableContainer>
            <thead className="thead">
              <tr>
                {dataKeys?.map((value, index) => (
                  <th
                    key={index}
                    onClick={() => {
                      handleArrowDirection(index, value);
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
            <tbody>
              {sortedData()?.map((item, index) => {
                return (
                  <tr key={index}>
                    {Object?.keys(item)?.map((value) => (
                      <td>{item?.[value]}</td>
                    ))}
                    <Button>
                      Ações
                      <IoIosArrowDown />
                    </Button>
                  </tr>
                );
              })}
            </tbody>
          </TableContainer>
          <FooterContainer>
            <p>Exibindo de 1 a 10 de 51 registros</p>
            <SelectPage>
              <BsChevronDoubleLeft />
              <BsChevronCompactLeft />
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <BsChevronCompactRight />
              <BsChevronDoubleRight />
            </SelectPage>
          </FooterContainer>
        </Container>
      ) : null}
    </>
  );
};
