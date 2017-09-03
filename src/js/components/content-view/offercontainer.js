import React from "react";

export default class OfferContainer extends React.Component {
    render() {
        return (
            <div className="offer-container">
                <div>
                    <img className="offer-icon" src="./images/badges/Mountainside.png"></img>
                </div>
                <h5>{ this.props.title }</h5>
                <h2>{ this.props.description }</h2>
                <button>View</button>
            </div>
        );
    }
}