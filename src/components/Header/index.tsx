import logo from "../../assets/logo.png";
import { Container, UserInfoContainer } from "./styles";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineExitToApp } from "react-icons/md";

export const Header = ({
  setsideBarIsOpen,
}: {
  setsideBarIsOpen: Function;
}) => {
  return (
    <Container>
      <div>
        <img
          src={logo}
          alt="logo"
          onClick={() =>
            /* 
            Aqui, pegamos o estado anterior e dizemos que ele vale o inverso.
            Pegamos por prevState pra que não precisassemos passar por parâmetro também o estado atual.
            */
            setsideBarIsOpen((prevSidebarIsOpen: boolean) => !prevSidebarIsOpen)
          }
        />
      </div>
      <UserInfoContainer>
        <div>
          <IoPersonCircleOutline className="personIcon" />
        </div>
        <div className="textContainer">
          <h2>João Da Silva</h2>
          <p>Admnistador</p>
        </div>
        <div>
          <MdOutlineExitToApp className="exitIcon" />
        </div>
      </UserInfoContainer>
    </Container>
  );
};
