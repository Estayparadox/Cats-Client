import React, { Component } from "react";
import "../../scss/components/Loading.view.scss";

interface IPropsLoadingComponent {
  isLoading: boolean;
  children?: any;
}

class LoadingComponent extends Component<IPropsLoadingComponent> {
    constructor(props: IPropsLoadingComponent) {
        super(props);
    }

    render() {
        return (
        <div>
            {this.props.isLoading && <div className="loader full-page-loader" />}
            <div className={`loading-element ${this.props.isLoading ? "onload" : ""}`}>
            {this.props.children}
            </div>
        </div>
        );
    }
}

export default LoadingComponent;
