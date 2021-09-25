import React from "react";
import { Link } from "react-router-dom";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMBDLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMBDLogoImg } from "./Header.style";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={RMDBLogo} alt="rmdb-logo" />
      </Link>
      <TMBDLogoImg src={TMBDLogo} alt="tmbd-logo" />
    </Content>
  </Wrapper>
);

export default Header;
