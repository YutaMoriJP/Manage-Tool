import Theme from "../Theme";
import Link from "next/link";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <nav>
        <Theme />
      </nav>
      {children}
    </>
  );
};

export default Layout;
