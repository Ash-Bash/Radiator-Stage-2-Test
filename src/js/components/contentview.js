import React from "react";

// Components
import FilterBar from "./filterbar";

export default class ContentView extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="headerCarousel">
                    <h1>Hello, World</h1>
                </div>
                <div className="contentBody">
                    <div className="topFilterBar">
                        <FilterBar className="topFilterBar"/>
                    </div>
                    <div className="bottomFilterBar">
                        <FilterBar className="bottomFilterBar"/>
                    </div>
                </div>
            </div>
        );
    }
}