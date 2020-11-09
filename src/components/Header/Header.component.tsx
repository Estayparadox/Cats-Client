import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import "../../scss/components/Header.view.scss";

interface IPropsHeaderComponent {}

interface IStateHeaderComponent {
    isOpen: boolean
}

class HeaderComponent extends Component<IPropsHeaderComponent, IStateHeaderComponent> {
    constructor(props: IPropsHeaderComponent) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    toggle(): void {
        if (this.state.isOpen) {
            this.setState({
                isOpen: false
            })
        } else {
            this.setState({
                isOpen: true
            })
        }     
    }

    render() {
        return (
            <div>
                <Navbar color="light" light className="mb-5">
                    <NavbarBrand href="/">Cats gallery</NavbarBrand>
                    <NavbarToggler onClick={() => this.toggle()} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="http://portfolio.joseph-pereniguez.com">Portfolio
                                </NavLink>
                                <NavLink href="https://github.com/Estayparadox">Github
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default HeaderComponent;