import React, { Component } from "react";
import { ICat } from "../models/cat";
import { getCats } from "../services/Cat.service";
import View from "./Cats.view";

interface IStateCatsContainer {
    cats: ICat[];
    isLoading: boolean;
    pageNumber: number;
    catCount: number
    maximumOfElementsToBeDisplay: number;
}

interface IPropsCatsContainer {}

class CatsContainer extends Component<IPropsCatsContainer, IStateCatsContainer> {
    constructor(props: IPropsCatsContainer) {
        super(props);

        this.state = {
            cats: [],
            isLoading: false,
            pageNumber: 1,
            catCount: 0,
            maximumOfElementsToBeDisplay: 30
        };
    }

    async componentDidMount(): Promise<void> {
        await this.fetchCats();
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
        return (
            <View
                cats={this.state.cats}
                handleClickOnCat={()=>{}}
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

export default CatsContainer;