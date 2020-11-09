import React, { Component } from "react";

interface IPropsSpinnerComponent {
    isLoading: boolean;
}

class SpinnerComponent extends Component<IPropsSpinnerComponent> {
    constructor(props: IPropsSpinnerComponent) {
        super(props);
    }
    
    render(): JSX.Element {
        return this.props.isLoading ? (
            <i className="fa fa-spinner fa-spin" />
        ) : <></>;
    }
}

export default SpinnerComponent;