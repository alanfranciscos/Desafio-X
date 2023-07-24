import React from 'react'

import { SelectContainer } from './styles'
import { SelectInputTypes } from './types'

export const SelectInput = ({
  data,
  getValue,
  label,
  valueSelected
}: SelectInputTypes) => {
  return (
    <SelectContainer>
      <>
        <label>{label}</label>
        {data?.length ? (
          <select
            name={label}
            onChange={(e) => getValue(e.target.value)}
            key={label + '-select'}
          >
            <option selected={false} value="">
              Selecione um item
            </option>
            {data?.map((item: { label: string; value: string }) => (
              <option
                selected={valueSelected === item?.value}
                value={item?.value}
                key={item?.value}
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
  )
}
