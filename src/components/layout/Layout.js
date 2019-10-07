import React, { Component, Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import HeaderBottom from './HeaderBottom';
import styled from 'styled-components';

class Layout extends Component {
    render() {
        return(
            <Fragment>
                <Header />
                <HeaderBottom />
                <Content>{this.props.children}</Content>
                <Footer />
            </Fragment>
        )
    }
}
const Content = styled.div`
  margin: 0 auto;
`

export default Layout;