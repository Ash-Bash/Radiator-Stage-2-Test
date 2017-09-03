import React from "react";

// Components
import FilterBar from "./filterbar";
import HeaderCarsouselContainer from "./headercarsouselcontainer";
import DescriptionContainer from "./descriptioncontainer";
import SkiingContainer from "./skiingcontainer";
import ApartmentsContainer from "./apartmentscontainer";
import ReviewQuotesContainer from "./reviewquotescontainer";
import LocationContainer from "./locationcontainer";

export default class ContentView extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="headerCarousel">
                    <HeaderCarsouselContainer />
                </div>
                <div className="contentBody">
                    <div className="topFilterBar">
                        <FilterBar className="topFilterBar"/>
                    </div>
                    <DescriptionContainer />
                    <SkiingContainer />
                    <ApartmentsContainer />
                    <ReviewQuotesContainer />
                    <LocationContainer />
                    <div className="bottomFilterBar">
                        <FilterBar className="bottomFilterBar"/>
                    </div>
                </div>
            </div>
        );
    }
}