import Theme from "../Theme";
import Link from "next/link";
import styled from "styled-components";
import {
  MdOutlineFitnessCenter as FitnessIcon,
  MdOutlineNoteAdd as NoteIcon,
  MdHouse as HouseIcon
} from "react-icons/md";
import { RiMentalHealthLine as MentalIcon } from "react-icons/ri";
import IconButton from "../../styled/IconButton";
import { Tooltip } from "kantan-components";
import { useScrolled } from "kantan-hooks";

interface ILayout {
  children: React.ReactNode;
}

const Main = styled.main`
  min-height: 100%;
`;

const Nav = styled.nav<{ $variant?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  position: sticky;
  top: 0;
  background: inherit;
  transition: background 600ms ease-in-out;
  background: ${({ $variant }) => ($variant ? `var(--bg-${$variant})` : "transparent")};
`;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  padding: 0 4px;
`;

const [House, Fitness, Note, Mental] = [HouseIcon, FitnessIcon, NoteIcon, MentalIcon].map(
  (icon) =>
    styled(icon)`
      width: 30px;
      height: 30px;
    `
);

const NavBar = ({ children }: ILayout) => {
  const [scrolled] = useScrolled();

  const navProps = scrolled ? { $variant: "secondary" } : {};

  return (
    <Nav {...navProps}>
      <Ul role="list">
        <Link href="/">
          <Li>
            <Tooltip text="HOME" describedBy="home-icon">
              <IconButton>
                <House aria-label="Home Icon" id="home-icon" />
              </IconButton>
            </Tooltip>
          </Li>
        </Link>
        <Link href="/fitness">
          <Li>
            <Tooltip text="FITNESS" describedBy="fitness-icon">
              <IconButton>
                <Fitness aria-label="Fitness Icon" id="fitness-icon" />
              </IconButton>
            </Tooltip>
          </Li>
        </Link>
        <Link href="/todo">
          <Li>
            <Tooltip text="NOTE" describedBy="note-icon">
              <IconButton>
                <Note aria-label="Note Icon" id="note-icon" />
              </IconButton>
            </Tooltip>
          </Li>
        </Link>
        <Link href="/mental">
          <Li>
            <Tooltip text="MENTAL HEALTH" describedBy="mental-icon">
              <IconButton>
                <Mental aria-label="Mental Health Icon" id="note-icon" />
              </IconButton>
            </Tooltip>
          </Li>
        </Link>
      </Ul>
      {children}
    </Nav>
  );
};

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <NavBar>
        <Theme />
      </NavBar>
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
