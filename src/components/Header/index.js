import React, { useContext } from "react";
import { Link } from "react-router-dom";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMBDLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMBDLogoImg } from "./Header.style";

// Context
import { Context } from "../../context";

const Header = () => {
  const [user] = useContext(Context);

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        {user ? (
          <span className="loggedin">Logged in as a: {user.username}</span>
        ) : (
          <Link to="/login">
            <span className="login">Log In</span>
          </Link>
        )}
        <TMBDLogoImg src={TMBDLogo} alt="tmbd-logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
