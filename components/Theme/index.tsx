import * as React from "react";
import styled from "styled-components";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useLocalStorage } from "kantan-hooks";

const StyledSwitch = styled(SwitchPrimitive.Root)`
  all: unset;
  box-sizing: border-box;
  width: 42px;
  height: 25px;
  background-color: #364fc7;
  border-radius: 9999px;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 2px #8b94c0;
  }

  &[data-state="checked"] {
    background-color: #fff9db;
  }

  [data-state="checked"]:focus {
    box-shadow: 0 0 0 2px #d9480f;
  }
`;

const StyledThumb = styled(SwitchPrimitive.Thumb)`
  display: block;
  width: 21px;
  height: 21px;
  border-radius: 9999px;
  transition: transform 350ms ease-in-out;
  transform: translateX(2px);
  will-change: transform;
  display: flex;
  justify-content: center;
  align-items: center;

  &[data-state="checked"] {
    transform: translateX(19px);
  }
`;

type SwitchProps = {
  checked: boolean;
  handleChecked: () => void;
  children: React.ReactNode;
};

const Switch = ({ checked, handleChecked, children }: SwitchProps) => {
  return (
    <StyledSwitch checked={checked} onCheckedChange={handleChecked}>
      <StyledThumb>{children}</StyledThumb>
    </StyledSwitch>
  );
};

const Theme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const checked = theme !== "light";

  const handleChecked = () => setTheme(theme === "light" ? "dark" : "light");

  const iconAttrs = { color: checked ? "#d9480f" : "#ffd43b", "aria-label": checked ? "sun icon" : "moon icon" };

  React.useEffect(() => {
    const root = document.body.parentNode as HTMLElement;
    root.dataset.theme = theme;
  }, [theme]);

  return (
    <Switch handleChecked={handleChecked} checked={checked}>
      {checked ? <BsFillSunFill {...iconAttrs} /> : <BsFillMoonFill {...iconAttrs} />}
    </Switch>
  );
};

export default Theme;
