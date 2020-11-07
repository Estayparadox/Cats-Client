import React, { Component } from "react";
import { ICat } from "../../models/cat";
import CatPictureComponent from "../CatPicture/CatPicture.component";
import "../../scss/components/Card.view.scss";

interface IPropsCardComponent {
    cat: ICat;
    handleClickOnCat: (cat: ICat) => void;
}

class CardComponent extends Component<IPropsCardComponent> {
    constructor(props: IPropsCardComponent) {
        super(props);
    }
    render(): JSX.Element {
        let title = `${this.props.cat.name.toUpperCase()}`;
        title = typeof this.props.cat.name !== "undefined" ? title : "";
        let genderClass: string = "";
        let genderTitle: string = "";
        switch (this.props.cat.gender) {
            case "Male":
                genderClass = "footer-male"
                genderTitle = "Male"
                break;
            case "Female":
                genderClass = "footer-female"
                genderTitle = "Female"
                break;
            default:
                genderClass = "footer-unknown"
                genderTitle = "Unknown gender"
                break;
        }

        return (
        <div
            className={"card-cat"}
            onClick={() => {
                this.props.handleClickOnCat(this.props.cat);
            }}
        >
            <div className="card-body">
                <div className="row">
                    <div className="text-center m-auto">
                        <CatPictureComponent
                            url={`${this.props.cat.picturePath}`}
                        />
                    </div>
                </div>
                <div className="name-wrap">
                    <h4 className="cat-name-display text-center">{title}</h4>
                </div>
            </div>
            <div className={`card-footer ${genderClass}`}>
                <div className="gender-indication">{`${genderTitle}`}</div>
            </div>
        </div>);
    }
}

export default CardComponent;
