import React from "react";

import { SelectContainer } from "./styles";

export const SelectInput = ({
  data,
  getValue,
  label,
}: {
  data: any;
  getValue: Function;
  label: string;
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
              <option selected={false} value={item?.value}>
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
