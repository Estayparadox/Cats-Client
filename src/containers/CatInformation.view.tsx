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

    getAgeFromBirthdate(birthdate: string): string {
        var catBirthdate = new Date(birthdate);
        let timeDiff = Math.abs(Date.now() - catBirthdate.getTime());
        let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
        return `(` + age.toString() + `yo)`;
    }

    getCssStyleForBackground(gender: string): string {
        switch (gender) {
            case "Male":
                return "male-back";
            case "Female":
                return "female-back";
            default:
                return "neutral-back";
        }
    }

    getCssStyleForColor(gender: string): string {
        switch (gender) {
            case "Male":
                return "male-front";
            case "Female":
                return "female-front";
            default:
                return "neutral-front";
        }
    }

    render(): JSX.Element {
        const genderBack = this.getCssStyleForBackground(this.props.cat.gender);
        const genderFront = this.getCssStyleForColor(this.props.cat.gender);
        const age = this.getAgeFromBirthdate(this.props.cat.birthdate);

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
                                <h3>Birthdate: {this.props.cat.birthdate} {age}</h3>
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