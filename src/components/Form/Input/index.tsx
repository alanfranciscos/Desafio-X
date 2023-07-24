import React from 'react'

import { InputContainer } from './Styles'
import { InputPropsType } from './types'

export const Input = ({
  title,
  placeholder,
  content,
  isRequired,
  value,
  type
}: InputPropsType) => {
  return (
    <InputContainer>
      <label>{!isRequired ? title : `${title} *`}</label>
      <input
        placeholder={placeholder}
        id={`input-${title}`}
        onChange={(event) => content(event?.target?.value)}
        value={value}
        type={type}
        name={`input-${title}`}
      ></input>
    </InputContainer>
  )
}

Input.defaultProps = {
  type: 'Text'
}
