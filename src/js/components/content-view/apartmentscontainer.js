import React from "react";

// Components
import { Tabs, Tab} from "../tabview";
import GridView from "../gridview";

export default class ApartmentsContainer extends React.Component {
    render() {

        var allspacesItems = [
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

        var sharesFacilitiesItems = [
            {
                title: "Le Spa",
                thumbnail: "./images/le-spa.png",
                link: "#",
                numBeds: 0,
                numPeople: 0
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
            }
        ];

        var bestforgroupsItems = [
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
            }
        ];

        var bestforfamiliesItems = [
            {
                title: "Apartment 1",
                thumbnail: "./images/apartment1.png",
                link: "#",
                numBeds: 2,
                numPeople: 5
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
                title: "Apartment 1",
                thumbnail: "./images/apartment2.png",
                link: "#",
                numBeds: 2,
                numPeople: 5
            }
        ];

        var bestforcouplesItems = [
            {
                title: "Apartment 2",
                thumbnail: "./images/apartment2.png",
                link: "#",
                numBeds: 1,
                numPeople: 6
            }
        ];

        return (
            <div className="apartments-container">
                <h2>The Chalet</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                    <a className="hyperlink" href="#"> Read more</a>
                </p>
                <select className="apartmentitems_selectbox" name="sometext">
                        <option>All Spaces</option>
                        <option>Shares Facilities</option>
                        <option>Best for Groups</option>
                        <option>Best for Families</option>
                        <option>Best for Couples</option>
                </select>
                <div className="apartments-itemscontainer">
                <Tabs>
                    <Tab title={'All Spaces'} linkClassName={'apartment-link'}>
                        <GridView data={allspacesItems}/>
                    </Tab>
                    <Tab title={'Shares Facilities'} linkClassName={'apartment-link'}>
                        <GridView data={sharesFacilitiesItems}/>
                    </Tab>
                    <Tab title={'Best for Groups'} linkClassName={'apartment-link'}>
                        <GridView data={bestforgroupsItems}/>
                    </Tab>
                    <Tab title={'Best for Families'} linkClassName={'apartment-link'}>
                         <GridView data={bestforfamiliesItems}/>
                    </Tab>
                    <Tab title={'Best for Couples'} linkClassName={'apartment-link'}>
                        <GridView data={bestforcouplesItems}/>
                    </Tab>
                </Tabs>
                </div>
            </div>
        );
    }
}