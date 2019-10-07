import React, { Component } from "react";
import { Container } from "reactstrap";

import Layout from "../components/layout/Layout";

class MainPage extends Component {
    render() {
        return(
            <Layout>
                <Container>
                    <div>Main Page Content</div>
                </Container>
                
            </Layout>
        )
    }
}
export default MainPage;