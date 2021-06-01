import React, { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "./Menu";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
  const [isShowingMenu, setIsShowingMenu] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    showMenu();
  }

  function showMenu() {
    if (isShowingMenu) {
      setIsShowingMenu(false);
    } else {
      setIsShowingMenu(true);
    }
  }
  // console.log("before change: " + isShowingMenu);
  // var toggleValue = !isShowingMenu; //! negates it (does the opposite)
  // console.log("after change: " + toggleValue);
  // setIsShowingMenu(!isShowingMenu);

  return (
    <header className="App-header">
      <div className="row">
        <div className="col">
          <div className="logo">
            <h1 key="home">
              {/*Links to homepage */}
              <Link to="/">LZ.</Link>
            </h1>
          </div>
        </div>

        <div className="col">
          <div className="menu">
            <Link to="/Menu" onClick={handleClick}>
              <i class="fas fa-plus"></i> menu
            </Link>
            {isShowingMenu && <Menu />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
