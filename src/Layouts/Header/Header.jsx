import './Header.css';

export const Header = ({ bgColor, changeBgColor, hfColor, changeHfColor, textColor, changeTextColor }) => {
  return (
    <header style={{ backgroundColor: hfColor }}>
      <button onClick={() => { changeBgColor(); changeHfColor(); changeTextColor(); }}
        style={{ "backgroundColor": bgColor, "color": textColor }}
      >Cambiar Fondo</button>
    </header>
  );
};
