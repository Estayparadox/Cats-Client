import React, { Component } from "react";
import CardListComponent from "../components/CardList/CardList.component";
import LoadingComponent from "../components/Loading/Loading.component";
import PaginationComponent from "../components/Pagination/Pagination.component";
import { ICat } from "../models/cat";

interface IStateCatsView {}

interface IPropsCatsView {
    cats: ICat[];
    handleClickOnCat: (cat: ICat) => void;
    isLoading: boolean;
    handleClickNext: () => void;
    handleClickPrevious: () => void;
    pageNumber: number;
    catCount: number;
    maximumOfElementsToBeDisplay: number;
}

class CatsView extends Component<IPropsCatsView, IStateCatsView> {
    constructor(props: IPropsCatsView) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <div className={"cats-main-content"}>
                <LoadingComponent isLoading={this.props.isLoading}>
                <div className="container">
                    <PaginationComponent
                        elementTypeName={{
                            namePlural: "cats",
                            nameSingular: "cat"
                        }}
                        handleClickNext={this.props.handleClickNext}
                        handleClickPrevious={this.props.handleClickPrevious}
                        numberOfElementsDisplayed={this.props.cats.length}
                        pageNumber={this.props.pageNumber}
                        totalNumberOfElements={this.props.catCount}
                        maximumOfElementsToBeDisplay={this.props.maximumOfElementsToBeDisplay}
                        isHiddenWhenNoElements={true}
                    />
                    <CardListComponent 
                        cats={this.props.cats}
                        handleClickOnCat={this.props.handleClickOnCat}
                    />
                </div>
                </LoadingComponent>
            </div>
        );
    }
}

export default CatsView;