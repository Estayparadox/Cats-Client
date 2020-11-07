import React, { Component } from "react";
import { ICat } from "../../models/cat";
import CardComponent from "../Card/Card.component";
import "../../scss/components/CardList.view.scss";

interface IPropsCardListComponent  {
  handleClickOnCat?: (cat: ICat) => void;
  cats: ICat[];
}

interface IStateCardListComponent {}

class CardListComponent extends Component<IPropsCardListComponent, IStateCardListComponent> {
  constructor(props: IPropsCardListComponent) {
    super(props);
  }

  handleClickOnCat(cat: ICat): void {
    return;
  }

  render(): JSX.Element {
    return (
      <div className="row">
          <div className="is-fullwidth">
              <div className="flex flex-wrap">
                {this.props.cats.map(cat => {
                  return (
                    <CardComponent
                        key={cat.id}
                        cat={cat}
                        handleClickOnCat={this.handleClickOnCat}
                    />
                  );
                })}
              </div>
          </div>
      </div>
    );
  }
}

export default CardListComponent;
