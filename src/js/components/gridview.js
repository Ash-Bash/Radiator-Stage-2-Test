//Dependences
import React from 'react';

// Components
import GridViewItem from "./GridViewItem";

export default class GridView extends React.Component {

    render() {

        const apartmentItemData = this.props.data.map(function(item, idx) {
            return <GridViewItem key={idx} className="gridViewItemCell" title={item.title} thumbnail={item.thumbnail} numBeds={item.numBeds} numPeople={item.numPeople}/>;
        });

        return (
            <div class="gridView">
                {apartmentItemData}
            </div>
        );
    }
}