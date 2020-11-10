import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../../scss/components/Footer.view.scss";

class FooterComponent extends Component {
    render(): JSX.Element {
        return (
            <MDBFooter className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                <MDBCol md="6">
                    <h5 className="title">Cats gallery</h5>
                    <p>
                    Front-end of Cat Adoption App developed in ReactJS TypeScript calling Matters API's endpoints.
                    </p>
                </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="http://portfolio.joseph-pereniguez.com"> Joseph Pereniguez </a>
                </MDBContainer>
            </div>
            </MDBFooter>
        );
    }
}

export default FooterComponent;