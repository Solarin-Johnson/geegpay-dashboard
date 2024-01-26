import "./navigation.scss";
import SearchIcon from "./../images/header/search-icon.svg";

export default function Navigation() {
  return (
    <>
      <Header title={"Dash"} />
      <Menu />
    </>
  );
}

export const Menu = () => {
  return;
};

export const Header = ({ title, date, name, email }) => {
  return (
    <div className="header">
      <div className="header-title">{title}</div>
      <div className="header-search">
        <img src={SearchIcon} alt="search_icon" />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="header-notification"></div>
    </div>
  );
};
