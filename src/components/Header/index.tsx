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
    <Container data-testid="header">
      <div>
        <img
          data-testid="header-logo"
          src={logo}
          alt="logo"
          onClick={() =>
            setsideBarIsOpen((prevSidebarIsOpen: boolean) => !prevSidebarIsOpen)
          }
        />
      </div>
      <UserInfoContainer data-testid="header-user">
        <div>
          <IoPersonCircleOutline
            className="personIcon"
            data-testid="header-user-person-icon"
          />
        </div>
        <div className="textContainer" data-testid="header-user-info">
          <h2>João Da Silva</h2>
          <p>Admnistador</p>
        </div>
        <div>
          <MdOutlineExitToApp
            className="exitIcon"
            data-testid="header-user-logout-icon"
          />
        </div>
      </UserInfoContainer>
    </Container>
  );
};
