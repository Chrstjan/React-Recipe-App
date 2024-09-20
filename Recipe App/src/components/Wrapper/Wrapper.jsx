import style from "./Wrapper.module.scss";

export const Wrapper = ({ children, isDarkMode }) => {
  return (
    <div
      className={`${style.wrapperStyling} ${
        isDarkMode ? style.darkMode : null
      }`}
    >
      {children}
    </div>
  );
};
