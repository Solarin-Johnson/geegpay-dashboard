import "./navigation.scss";
import { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "./../images/header/search-icon.svg";
import { ReactComponent as Calender } from "./../images/header/calender.svg";
import { ReactComponent as ArrowDown } from "./../images/header/arrow-down.svg";
import { ReactComponent as Bell } from "./../images/header/bell.svg";
import { ReactComponent as Logo } from "./../images/menu/logo.svg";
import {
  DashboardIcon,
  MenuIcon2,
  MenuIcon3,
  MenuIcon4,
  MenuIcon5,
  MenuIcon6,
  MenuIcon7,
  MenuIcon8,
  MenuIcon9,
  ModeIconDark,
  ModeIconLight,
} from "./MenuIcons";

export default function Navigation() {
  const today = new Date();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const shortOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const todaysDate = today.toLocaleDateString("en-US", options);
  const todaysShortDate = today.toLocaleDateString("en-US", shortOptions);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Header
        title={"Dashboard"}
        date={[todaysDate, todaysShortDate]}
        width={windowWidth}
        name={"John Doe"}
        email={"Johndoe@example.com"}
      />
      <Menu width={windowWidth} />
    </>
  );
}

export const Header = ({ title, date, name, email, width }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="header">
      <div className="header-first">
        <span
          class="material-symbols-outlined"
          onClick={(e) => {
            e.currentTarget.parentElement.parentElement.parentElement.children[1].classList.toggle(
              "expand-menu"
            );
            e.currentTarget.parentElement.parentElement.parentElement.children[0].classList.toggle(
              "expand-header"
            );
            e.currentTarget.parentElement.parentElement.parentElement.children[2].classList.toggle(
              "expand-header"
            );
            // e.currentTarget.parentElement.parentElement.parentElement.children[0].classList.toggle(
            //   "expand-menu"
            // );
          }}
        >
          more_vert
        </span>
        <div className="header-title">{searchText.length < 1 && title}</div>
        <div
          className={`header-search ${
            width < 600 ? searchText.length < 1 && "expand-search" : ""
          }`}
        >
          <SearchIcon />
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="header-date">
          <Calender />
          <span className={width < 840 ? "float-date" : ""}>
            {width > 500 ? date[0] : date[1]}
          </span>
        </div>
      </div>
      <div className="header-second">
        <div className="header-notification">
          <Bell />
        </div>
        <ProfileCard name={name} email={email} width={width} />
      </div>
    </div>
  );
};

export const ProfileCard = ({ name, email, width }) => {
  return (
    <div className="profile">
      <div className="profile-image"></div>
      {(width > 920 || width <= 540) && (
        <>
          <div className="profile-name">{name}</div>
          <div className="profile-mail">{email}</div>
        </>
      )}
      <div className="profile-dropdown">
        <ArrowDown />
      </div>
    </div>
  );
};

export const Menu = ({ width }) => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [mode, setMode] = useState("light");

  return (
    <div className="menu">
      <div className="logo">
        <Logo />
      </div>
      <div className="menu-top">
        <span
          className={`menu-top-indicator ${activeMenu < 6 ? "indicate" : ""}`}
          style={{ top: `calc(112px + ${activeMenu * 54.5}px)` }}
        ></span>
        <DashboardIcon
          active={activeMenu}
          setActiveMenu={(data) => setActiveMenu(data)}
          i={0}
        />
        <MenuIcon2
          active={activeMenu}
          setActiveMenu={(data) => setActiveMenu(data)}
          i={1}
        />
        <MenuIcon3
          active={activeMenu}
          setActiveMenu={(data) => setActiveMenu(data)}
          i={2}
        />
        <MenuIcon4
          active={activeMenu}
          setActiveMenu={(data) => setActiveMenu(data)}
          i={3}
        />
        <MenuIcon5
          active={activeMenu}
          setActiveMenu={(data) => setActiveMenu(data)}
          i={4}
        />
        <MenuIcon6
          active={activeMenu}
          setActiveMenu={(data) => setActiveMenu(data)}
          i={5}
        />
      </div>
      <div className="menu-mode">
        <span
          className={`menu-mode-toggle ${mode === "dark" ? "down" : "up"}`}
        ></span>
        <ModeIconLight mode={mode} setMode={(data) => setMode(data)} />
        <ModeIconDark mode={mode} setMode={(data) => setMode(data)} />
      </div>
      <div className="menu-bottom">
        <MenuIcon7
          active={activeMenu}
          setActiveMenu={(data) => setActiveMenu(data)}
          i={6}
        />
        <MenuIcon8
          active={activeMenu}
          setActiveMenu={(data) => setActiveMenu(data)}
          i={7}
        />
        <MenuIcon9
          active={activeMenu}
          setActiveMenu={(data) => setActiveMenu(data)}
          i={8}
        />
      </div>
    </div>
  );
};
