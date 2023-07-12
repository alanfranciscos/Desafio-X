import { Container } from "./styles";
import { CardProps } from "./types";

export const Card = ({ icon, title, value }: CardProps) => {
  return (
    <Container id={title.replace(" ", "_")}>
      <span className="title">{title}</span>
      {/* props icon */}
      <div className="value--container">
        {icon}
        <p>{value}</p>
      </div>
    </Container>
  );
};
