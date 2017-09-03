import React from "react";

// Components
import FilterBar from "./filterbar";
import HeaderCarsouselContainer from "./headercarsouselcontainer";
import DescriptionContainer from "./descriptioncontainer";
import SkiingContainer from "./skiingcontainer";
import ApartmentsContainer from "./apartmentscontainer";
import ReviewQuotesContainer from "./reviewquotescontainer";
import LocationContainer from "./locationcontainer";
import MoreInfoView from "./moreinfo-view/moreinfoview";

export default class ContentView extends React.Component {
    render() {
        return (
            <div className="content">
                <HeaderCarsouselContainer />
                <div className="contentBody">
                    <div className="topFilterBar">
                        <FilterBar />
                    </div>
                    <DescriptionContainer />
                    <SkiingContainer lifts_open="101" lifts_scheduled="02"/>
                    <ApartmentsContainer />
                    <ReviewQuotesContainer />
                    <LocationContainer />
                    <div className="bottomFilterBar">
                        <FilterBar />
                    </div>
                </div>
                <MoreInfoView />
            </div>
        );
    }
}