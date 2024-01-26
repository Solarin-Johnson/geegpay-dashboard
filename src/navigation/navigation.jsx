import "./navigation.scss";
import { ReactComponent as SearchIcon } from "./../images/header/search-icon.svg";
import { ReactComponent as Calender } from "./../images/header/calender.svg";
import { ReactComponent as ArrowDown } from "./../images/header/arrow-down.svg";
import { ReactComponent as Bell } from "./../images/header/bell.svg";
import { useEffect, useState } from "react";

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
      />
      <Menu />
    </>
  );
}

export const Menu = () => {
  return;
};

export const Header = ({ title, date, name, email, width }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="header">
      <div className="header-first">
        <div className="header-title">{title}</div>
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
          <span className={width < 600 ? "float-date" : ""}>
            {width > 500 ? date[0] : date[1]}
          </span>
        </div>
      </div>
      <div className="header-second">
        <div className="header-notification">
          <Bell />
        </div>
        <ProfileCard name={name} email={email} />
      </div>
    </div>
  );
};

export const ProfileCard = ({ name, email }) => {
  return (
    <div className="profile">
      <div className="profile-picture"></div>
      <div className="profile-name">{name}</div>
      <div className="profile-mail">{email}</div>
      <div className="profile-dropdown">{<ArrowDown />}</div>
    </div>
  );
};
