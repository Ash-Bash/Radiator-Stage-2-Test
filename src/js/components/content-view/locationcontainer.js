import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";


//Google Map Api Key
const googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyDzRhtS8STNSafBWcUWO30yMrGeAtKH3Rk"

const Map = withGoogleMap(props => (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={3}
      defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
      onClick={props.onMapClick}
      googleMapURL={googleMapURL}>
      
    </GoogleMap>
  ));

export default class LocationContainer extends React.Component {
    render() {
        return (
            <div className="location-container">
                <div className="location-description">
                    <h2>Perfectly Placed</h2>
                    <p>
                        The chalet’s picturesque, off-the-beaten track situation, 
                        is but a stonesthrow from the best alpine activities. Geneva 
                        Airport is only a 1-hour drive away, meaning you can spend 
                        less time travelling, and more time enjoying yourself.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <button>The Village</button>
                </div>
                <div className="location-mapview">
                <Map
                    containerElement={
                        <div className="map" style={{ height: `100%` }} />
                    }
                    mapElement={
                        <div className="map" style={{ height: `100%` }} />
                    }
                />
                </div>
            </div>
        );
    }
}