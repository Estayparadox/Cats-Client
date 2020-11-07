import React, { Component } from "react";

interface IPropsCatPictureComponent {
    url?: string;
}

class CatPictureComponent extends Component<IPropsCatPictureComponent> {
    constructor(props: IPropsCatPictureComponent) {
        super(props);
    }

    render() {
        return (
            <img
                className={`rounded-circle white-background border-white`}
                src={this.props.url}
                alt="profile picture"
            />
        );
    }
}

export default CatPictureComponent;