import React, { Component } from 'react';
import { ICat } from '../models/cat';
import { Modal } from "react-bootstrap";
import "../scss/containers/CatInformation.view.scss";
import { postAppointment } from '../services/Appointment.service';
import { getFormatedDate } from '../utils/date';

interface IPropsCatInformationView {
    cat: ICat;
}

class CatInformationView extends Component<IPropsCatInformationView> {
    state = {
        show: false,
        bodyLine1: "",
        bodyLine2: ""
    };
    
    constructor(props: IPropsCatInformationView) {
        super(props);
        
        this.handleShow.bind(this);
        this.handleHide.bind(this);
    }

    componentDidMount(){
        let currentComponent = this;
        currentComponent.setState({
            show: false
        })
    }

    handleShow(): void {
        this.getAppointment();
        let currentComponent = this;
        currentComponent.setState({
            show: true
        })
    }

    handleHide(): void {
        let currentComponent = this;
        currentComponent.setState({
            show: false
        })
    }

    handleBack(): void {
        window.location.assign("/cats");
    }

    async getAppointment(): Promise<void> {
        try {
            const response = await postAppointment(this.props.cat.id);
            const schedule = JSON.parse(response as string);
            const formatedDate = getFormatedDate(new Date(schedule.appointment));
            const bodyMessage1 = `Let's meet at "Paris Refuge" the ` + formatedDate
            const bodyMessage2 = `to finalize ` + this.props.cat.name + `'s adoption.`
            this.setState ({
                bodyLine1: bodyMessage1,
                bodyLine2: bodyMessage2
            })
        } catch (error) {
            console.error("error", error);
        }
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
                    onClick={() => this.handleBack()}>
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
                                onClick={() => this.handleShow()}>
                                Make an appointment to adopt
                            </button>
                            <Modal
                                show={this.state.show}
                                onHide={() => this.handleHide()}
                                backdrop="static"
                                keyboard={false}>
                                <Modal.Header closeButton>
                                <Modal.Title>{"Appointment Request"}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {"Thank you !"}<br/>
                                    {this.state.bodyLine1}<br/>
                                    {this.state.bodyLine2}
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CatInformationView;