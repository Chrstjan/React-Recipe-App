import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { Header } from "../components/Header/Header";
import { Navigation } from "../components/Header/Navigation/Navigation";
import { Main } from "../components/Main/Main";
import { Theme } from "../components/Main/Theme/Theme";

export const MainLayout = () => {
  const { isDarkMode, changeTheme } = useContext(ThemeContext);

  return (
    <Wrapper isDarkMode={isDarkMode}>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Theme action={changeTheme} />
        <Outlet />
      </Main>
    </Wrapper>
  );
};
