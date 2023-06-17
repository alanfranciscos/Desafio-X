import { InputContainer } from "./Styles";

interface InputProps {
  title: string;
  placeholder: any;
  content: Function;
  isRequired: boolean;
  value: any;
  type: string;
}

export const Input = ({
  title,
  placeholder,
  content,
  isRequired,
  value,
  type,
}: InputProps) => {
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
  );
};

Input.defaultProps = {
  type: "Text",
};
