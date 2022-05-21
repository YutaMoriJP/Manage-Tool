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
import useKeyPressRoute from "../../hooks/useKeyPressRoute";

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

const NAV_ITEM = [
  { text: "HOME", id: "home-icon", label: "Home Icon", href: "/", Icon: House },
  { text: "FITNESS", id: "fitness-icon", label: "Fitness Icon", href: "/fitness", Icon: Fitness },
  { text: "NOTE", id: "note-icon", label: "Note Icon", href: "/note", Icon: Note },
  { text: "MENTAL", id: "mental-icon", label: "Mental Icon", href: "/mental", Icon: Mental }
];

const NavBar = ({ children }: ILayout) => {
  const [scrolled] = useScrolled();

  const navProps = scrolled ? { $variant: "secondary" } : {};

  const handleKeyPress = useKeyPressRoute();

  return (
    <Nav {...navProps}>
      <Ul role="list">
        {NAV_ITEM.map((Item) => (
          <Link href={Item.href} key={Item.href}>
            <Li tabIndex={0} onKeyDown={(e) => handleKeyPress(e, Item.href)}>
              <Tooltip text={Item.text} describedBy={Item.id}>
                <IconButton>
                  <Item.Icon aria-label={Item.label} id={Item.id} />
                </IconButton>
              </Tooltip>
            </Li>
          </Link>
        ))}
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
