import { NavLink } from "react-router-dom";
import style from "./Navigation.module.scss";

export const Navigation = ({ isDarkMode }) => {
  return (
    <nav
      className={`${style.navStyling} ${isDarkMode ? style.darkMode : null}`}
    >
      <ul className={style.linkStyling}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? style.activeLink : style.linkStyling
            }
            to={"/"}
          >
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
