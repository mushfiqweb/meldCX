import { Fragment } from 'react';
import styled from 'styled-components';
import Body from './Body';
import Header from './Header';

function Layout({ children }) {
    return (
        <Fragment>
            <Header />
            <Body>{children}</Body>
        </Fragment>

    );
}

const LayoutStyled = styled.div`
    width: 100%;
`;

export default Layout;
