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

    handleBack() {
        window.location.assign("/cats");
    }

    render(): JSX.Element {
        return (
            <>
                <button 
                    className="btn back-button" 
                    onClick={this.handleBack}>
                    Back
                </button>
                <div className={"cat-information"}>
                    <div className={"left-part"}>
                        <div className={"img-container"}>
                            <img
                                src={this.props.cat.picturePath}
                                alt="cat picture"
                            />
                        </div>            
                    </div>
                    <div className={"right-part"}>
                        <div className={"information-container"}>
                            <h2>{this.props.cat.name}</h2>
                            <div className={"information"}>
                                <h3>Birthdate: {this.props.cat.birthdate}</h3>
                                <h3>Gender: {this.props.cat.gender}</h3>
                                <h3>Breed: {this.props.cat.breed}</h3>
                            </div>
                            <button 
                                className="btn btn-custom" 
                                onClick={() => {}}>
                                Make an appointment to adopt
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CatInformationView;