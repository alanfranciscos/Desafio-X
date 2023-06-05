import React from "react";

import { SelectContainer } from "./styles";

export const SelectInput = ({
  data,
  getValue,
  label,
  valueSelected,
}: {
  data: any;
  getValue: Function;
  label: string;
  valueSelected: string;
}) => {
  return (
    <SelectContainer>
      <>
        <label>{label}</label>
        {data?.length ? (
          <select name={label} onChange={(e) => getValue(e.target.value)}>
            <option selected={false} value="">
              Selecione um item
            </option>
            {data?.map((item: { label: string; value: string }) => (
              <option
                selected={valueSelected === item?.value}
                value={item?.value}
              >
                {item?.label}
              </option>
            ))}
          </select>
        ) : (
          <select disabled className="select-disable" placeholder="Sem dados">
            <option selected={false} value="">
              Sem dados
            </option>
          </select>
        )}
      </>
    </SelectContainer>
  );
};
