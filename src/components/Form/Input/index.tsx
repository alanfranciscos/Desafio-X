import { InputContainer } from "./Styles";

interface InputProps {
  title: string;
  placeholder: string;
  content: Function;
  isRequired: boolean;
  value: string;
}

export const Input = ({
  title,
  placeholder,
  content,
  isRequired,
  value,
}: InputProps) => {
  return (
    <InputContainer>
      <label>{!isRequired ? title : `${title} *`}</label>
      <input
        placeholder={placeholder}
        id={`input-${title}`}
        onChange={(event) => content(event?.target?.value)}
        value={value}
        type="text"
        name={`input-${title}`}
      ></input>
    </InputContainer>
  );
};
