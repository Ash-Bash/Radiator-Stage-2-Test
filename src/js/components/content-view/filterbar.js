import React from "react";

export default class FilterBar extends React.Component {
    render() {
        return (
            <div className="filterbar">
                <div className="filterbarContent">
                    <h6 className="filterBarItems">Show me apartments for</h6>
                    <select className="filterBarItems filterSelectBox" name="sometext">
                        <option>1 Person</option>
                        <option>2 People</option>
                        <option>3 People</option>
                        <option>4 People</option>
                        <option>5 People</option>
                        <option>6 people</option>
                        <option>7 People</option>
                        <option>8 People</option>
                        <option>9 People</option>
                        <option>10 People</option>
                    </select>
                    <h6 className="filterBarItems">in</h6>
                    <select className="filterBarItems filterSelectBox" name="sometext">
                        <option>March 2017</option>
                        <option>April 2017</option>
                        <option>May 2017</option>
                        <option>June 2017</option>
                        <option>July 2017</option>
                        <option>August 2017</option>
                        <option>September 2017</option>
                        <option>October 2017</option>
                        <option>November 2017</option>
                        <option>December 2017</option>
                        <option>January 2018</option>
                        <option>February 2018</option>
                    </select>
                    <button className="filterBarItems filterButton">Check Availability</button>
                </div>
            </div>
        );
    }
}