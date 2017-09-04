//Dependences
import React from 'react';

// Components
import GridViewItem from "./GridViewItem";

export default class GridView extends React.Component {
    constructor() {
        super();
        this.name = "Ashley Chapman Design";
    
    }

    render() {

        var items = [
            {
                title: "Le Spa",
                thumbnail: "./images/le-spa.png",
                link: "#",
                numBeds: 0,
                numPeople: 0
            },
            {
                title: "Apartment 1",
                thumbnail: "./images/apartment1.png",
                link: "#",
                numBeds: 2,
                numPeople: 5
            },

            {
                title: "Apartment 2",
                thumbnail: "./images/apartment2.png",
                link: "#",
                numBeds: 1,
                numPeople: 6
            },
            {
                title: "Apartment 2",
                thumbnail: "./images/apartment3.png",
                link: "#",
                numBeds: 2,
                numPeople: 6
            },
            {
                title: "Apartment 2",
                thumbnail: "./images/apartment4.png",
                link: "#",
                numBeds: 3,
                numPeople: 8
            },
            {
                title: "Bar L'Escale",
                thumbnail: "./images/bar-lescale.png",
                link: "#",
                numBeds: 0,
                numPeople: 0
            },
            {
                title: "Le Spa",
                thumbnail: "./images/le-spa.png",
                link: "#",
                numBeds: 0,
                numPeople: 0
            },
            {
                title: "Apartment 1",
                thumbnail: "./images/apartment2.png",
                link: "#",
                numBeds: 2,
                numPeople: 5
            }
        ];

        const apartmentItemData = items.map(function(item, idx) {
            return <GridViewItem key={idx} className="gridViewItemCell" title={item.title} thumbnail={item.thumbnail} numBeds={item.numBeds} numPeople={item.numPeople}/>;
        });

        return (
            <div class="gridView">
                {apartmentItemData}
            </div>
        );
    }
}