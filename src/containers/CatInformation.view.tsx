import React, { Component } from 'react';
import { ICat } from '../models/cat';
import "../scss/containers/CatInformation.view.scss";

interface IPropsCatInformationView {
    cat: ICat;
}

class CatInformationView extends Component<IPropsCatInformationView> {
    constructor(props: IPropsCatInformationView) {
        super(props);
    }

    render(): JSX.Element {
        console.log(this.props.cat)
        return (
            <div className={"cat-information"}>
                <div className={"left-part"}>            
                    <img
                        className={""}
                        src={this.props.cat.picturePath}
                        alt="cat picture"
                    />
                </div>
                <div className={"right-part"}>
                    <h2>{this.props.cat.name}</h2>
                    <h3>Birthdate: {this.props.cat.birthdate}</h3>
                    <h3>Gender: {this.props.cat.gender}</h3>
                    <h3>Breed: {this.props.cat.breed}</h3>
                    <button 
                        className="btn btn-custom" 
                        onClick={() => {}}>
                        Make an appointment to adopt
                    </button>
                </div>
            </div>
        );
    }
}

export default CatInformationView;