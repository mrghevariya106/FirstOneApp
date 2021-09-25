import React from 'react';
import { Link } from 'react-router-dom';

// styled
import { Wrapper, Content} from './BreadCrum.style';

const BreadCrum = ({ movieTitle }) => (
    <Wrapper>
        <Content>
            <Link to="/">
                <span>Home</span>
            </Link>
            <span> | </span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
);

export default BreadCrum;