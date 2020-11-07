import React, { Component } from "react";
import "../../scss/components/Pagination.view.scss";

interface IPropsPaginationComponent {
    handleClickPrevious: () => void;
    handleClickNext: () => void;
    elementTypeName: IElementTypeName;
    numberOfElementsDisplayed: number;
    totalNumberOfElements: number;
    pageNumber: number;
    maximumOfElementsToBeDisplay: number;
    isHiddenWhenNoElements?: boolean;
}

interface IElementTypeName {
    nameSingular: string;
    namePlural: string;
}

class PaginationComponent extends Component<IPropsPaginationComponent> {
    constructor(props: IPropsPaginationComponent) {
        super(props);
    }
    
    static defaultProps: Partial<IPropsPaginationComponent> = {
        isHiddenWhenNoElements: true,
        pageNumber: -1,
        totalNumberOfElements: -1
    };

    render() {
        const hasNextPage: boolean =
        this.props.totalNumberOfElements > 0 &&
        (this.props.pageNumber - 1) * this.props.maximumOfElementsToBeDisplay +
            this.props.numberOfElementsDisplayed <
            this.props.totalNumberOfElements;
        const numberOfElementsDisplayedStart =
        this.props.maximumOfElementsToBeDisplay * (this.props.pageNumber - 1) + 1;
        return this.props.isHiddenWhenNoElements === true &&
        this.props.totalNumberOfElements === 0 ? null : (
        <div className="row" style={{ marginTop: "20px", marginBottom: "20px" }}>
            <nav aria-label="..." className="col-12">
            {this.props.totalNumberOfElements > 0 ? (
                <div className="row">
                <ul className="pager col-12" style={{ paddingLeft: "15px" }}>
                    <li className={"previous ".concat(this.props.pageNumber > 1 ? "" : "disabled")}>
                    <a onClick={this.props.handleClickPrevious}>Previous</a>
                    </li>
                    <li className="text-center">
                    {this.props.totalNumberOfElements === 0 ? 0 : numberOfElementsDisplayedStart}
                    {` - ${this.props.numberOfElementsDisplayed +
                        this.props.maximumOfElementsToBeDisplay * (this.props.pageNumber - 1)} / ${
                        this.props.totalNumberOfElements
                    }`}{" "}
                    {this.props.numberOfElementsDisplayed > 1
                        ? this.props.elementTypeName.namePlural
                        : this.props.elementTypeName.nameSingular}
                    </li>
                    <li className={"next ".concat(hasNextPage ? "" : "disabled")}>
                    <a onClick={this.props.handleClickNext}>Next</a>
                    </li>
                </ul>
                </div>
            ) : (
                <ul className="pager">
                <li className="text-center">{`None ${this.props.elementTypeName.nameSingular}`}</li>
                </ul>
            )}
            </nav>
        </div>
        );
    }

    shouldComponentUpdate(nextProp: IPropsPaginationComponent): boolean {
        return (
            nextProp.elementTypeName !== this.props.elementTypeName ||
            nextProp.maximumOfElementsToBeDisplay !== this.props.maximumOfElementsToBeDisplay ||
            nextProp.numberOfElementsDisplayed !== this.props.numberOfElementsDisplayed ||
            nextProp.pageNumber !== this.props.pageNumber ||
            nextProp.totalNumberOfElements !== this.props.totalNumberOfElements
        );
    }
}

export default PaginationComponent;
