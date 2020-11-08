import React, { Component } from "react";
import { ICat } from "../models/cat";
import View from "./CatInformation.view";

class CatInformationContainer extends Component<{}, {value: string}> {
    constructor(props: any) {
        super(props);

        if (props.location && props.location.state) {
            this.state = {value: props.location.state.cat}; 
        }
    }

    render(): JSX.Element {
        let cat: ICat = {
            id: -1,
            name: "",
            birthdate: "",
            breed: "",
            location: "",
            gender: "",
            picturePath: ""
        };
        cat = Object.assign(cat, this.state.value)

        return (
            <View
                cat={cat}
            />
        );
    }
}

export default CatInformationContainer;