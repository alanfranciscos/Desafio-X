import { InputContainer } from "./Styles";
import { InputDateProps } from "./types";

export const InputDate = ({
  isRequired,
  title,
  getValue,
  value,
}: InputDateProps) => {
  return (
    <InputContainer>
      <label>{!isRequired ? title : `${title} *`}</label>
      <input
        type="date"
        onChange={(e) => getValue(e.target.value)}
        value={value}
      />
    </InputContainer>
  );
};
InputDate.defaultProps = {
  isRequired: false,
};
