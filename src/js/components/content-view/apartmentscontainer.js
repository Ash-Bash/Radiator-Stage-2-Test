import React from "react";

// Components
import { Tabs, Tab} from "../tabview";
import GridView from "../gridview";

export default class ApartmentsContainer extends React.Component {
    render() {
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
                        <GridView />
                    </Tab>
                    <Tab title={'Shares Facilities'} linkClassName={'apartment-link'}>
                     
                    </Tab>
                    <Tab title={'Best for Groups'} linkClassName={'apartment-link'}>
                      
                    </Tab>
                    <Tab title={'Best for Families'} linkClassName={'apartment-link'}>
                      
                    </Tab>
                    <Tab title={'Best for Couples'} linkClassName={'apartment-link'}>
                    
                    </Tab>
                </Tabs>
                </div>
            </div>
        );
    }
}