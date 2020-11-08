import React, { Component } from "react";
import { ICat } from "../models/cat";
import { getCats } from "../services/Cat.service";
import View from "./Cats.view";
import PropType from 'prop-types';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

interface IStateCatsContainer {
    cats: ICat[];
    isLoading: boolean;
    pageNumber: number;
    catCount: number
    maximumOfElementsToBeDisplay: number;
    redirect: boolean;
    selectedCat: ICat;
}

interface IPropsCatsContainer {}

class CatsContainer extends Component<IPropsCatsContainer, IStateCatsContainer> {
    static contextTypes = { 
        router: PropType.object 
    } 
    
    constructor(props: IPropsCatsContainer) {
        super(props);

        this.state = {
            cats: [],
            isLoading: false,
            pageNumber: 1,
            catCount: 0,
            maximumOfElementsToBeDisplay: 30,
            redirect: false,
            selectedCat: {
                id: -1,
                name: "",
                birthdate: "",
                breed: "",
                location: "",
                gender: "",
                picturePath: ""
            }
        };
    }

    async componentDidMount(): Promise<void> {
        await this.fetchCats();
    }

    handleClickOnCat(cat: ICat) {
        this.setState({
            redirect: true,
            selectedCat: cat
        })
    }

    async fetchCats(): Promise<void> {
        this.setState({
            isLoading: true
        })
        try {
            let response = await getCats();
            const catList: ICat[] = JSON.parse(response as string)
            if (catList) {
                this.setState({
                    cats: catList,
                    catCount: catList.length,
                    isLoading: false
                })
            }
        } catch (error) {
            console.error(error);
        }
    }

    render(): JSX.Element {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: '/information',
                state: { cat: this.state.selectedCat },
            }} />
        } else {
        return (
            <View
                cats={this.state.cats}
                handleClickOnCat={this.handleClickOnCat.bind(this)}
                isLoading={this.state.isLoading}
                handleClickNext={()=>{}}
                handleClickPrevious={()=>{}}
                pageNumber={this.state.pageNumber}
                catCount={this.state.catCount}
                maximumOfElementsToBeDisplay={this.state.maximumOfElementsToBeDisplay}
            />
        );
        }
    }
}

export default CatsContainer;