import React from 'react';

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMBDLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMBDLogoImg } from './Header.style';

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={RMDBLogo} alt='rmdb-logo' />
            <TMBDLogoImg src={TMBDLogo} alt='tmbd-logo' />
        </Content>
    </Wrapper>
)

export default Header;
