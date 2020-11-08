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
        let genderBack: string = "";
        let genderFront: string = "";
        switch (this.props.cat.gender) {
            case "Male":
                genderBack = "male-back";
                genderFront = "male-front";
                break;
            case "Female":
                genderBack = "female-back";
                genderFront = "female-front";
                break;
            default:
                genderBack = "neutral-back";
                genderFront = "neutral-front";

                break;
        }

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
                                className={"rounded-circle white-background border-white"}
                                src={this.props.cat.picturePath}
                                alt="cat picture"
                            />
                        </div>            
                    </div>
                    <div className={"right-part"}>
                        <div className={"information-container"}>
                            <h2 className={`${genderFront}`}>{this.props.cat.name}</h2>
                            <div className={"information"}>
                                <h3>Birthdate: {this.props.cat.birthdate}</h3>
                                <h3>Gender: {this.props.cat.gender}</h3>
                                <h3>Breed: {this.props.cat.breed}</h3>
                            </div>
                            <button 
                                className={`btn btn-custom ${genderBack}`}
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