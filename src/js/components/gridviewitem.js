//Dependences
import React from 'react';

// Components
import GridViewItem from "./GridViewItem";

export default class GridView extends React.Component {

    // Check if the Apartment Data that contains numBeds and numPeople are higher than Zero if so set display: block or if it is zero the set to display: none
    isApartment(num_beds, num_people) {
        if (num_beds > 0 && num_people > 0) {
            return {
                display: 'block'
            };
        } else {
            return {
                display: 'none'
            };
        }
    }

    render() {

        return (
            <div className="gridViewItemCell">
                    <img className="gridviewitem-thumbnail" src={this.props.thumbnail} alt="Card image cap"/>
                    <div className="gridviewitem-block">
                        <h5 className="gridviewitem-title">{this.props.title}</h5>
                        <div style={this.isApartment(this.props.numBeds, this.props.numPeople)} className="gridviewitem-apartmenttypes">
                            <div className="gridviewitem-numofbedsindicator">
                                <img src="./images/badges/bed16x11.png"/>
                                <h6>{this.props.numBeds}</h6>
                            </div>
                            <div className="gridviewitem-numofpeopleindicator">
                                <img src="./images/badges/person12x12.png"/>
                                <h6>{this.props.numPeople}</h6>
                            </div>
                        </div>                            
                    </div>
                </div>
        );
    }
}