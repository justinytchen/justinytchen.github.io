import topology from '../topology.json';
import closeButton from './close-button.svg';
import React, { Component } from 'react';
import Modal from 'react-modal';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Annotations,
  Annotation,
  Marker,
} from "react-simple-maps";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : 'calc(50% + 0rem)',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '400px'
  }
};

Modal.setAppElement('#root')


const wrapperStyles = {
  width: "100%",
  margin: "0 auto",
}

const markerStyles = {
    default: { fill: "#555555" }
};

class Places extends Component {

  constructor(){
    super();
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
  }

  createMarker(x, y, label){
    return(
      <Marker
        marker={{ coordinates: [ x, y], locationName: label }}
        style={markerStyles}
        onMouseLeave={this.handleOnMouseLeave}
        onFocus={this.handleOnMouseLeave}
        onMouseMove={this.handleOnMouseEnter}
        onMouseEnter={this.handleOnMouseEnter}
        onFocus={this.handleOnMouseEnter}
      >
      <circle cx={ 0 } cy={ 0 } r={ 3.5 } />
    </Marker>);
  }


  handleOnMouseEnter(data){
    this.setState({
      lastLocation: data,
      locationSelected: data
    });
  }

  handleOnMouseLeave(data){
    if(this.state.locationSelected == null)
      return;
    this.setState({
      locationSelected: null
    });
  }

  render() {
    let annotation = null;
    if(this.state)
      console.log("render", this.state.locationSelected);

    if(this.state != null && this.state.locationSelected != null){
      let long = this.state.locationSelected.coordinates[0];
      let lat = this.state.locationSelected.coordinates[1];

      let xMult = (long < 0) ? 1 : -1;
      let yMult = (lat < 0) ? -1 : 1;



      annotation =
      <Annotation dx={ -35 * xMult } dy={ -35 * yMult} curve={0.5}
                  subject={[long - xMult, lat + yMult]}
                  strokeWidth={ 1 } stroke = "black">
        <text>
          { this.state.locationSelected.locationName}
        </text>
      </Annotation>
    }

    console.log(this.state);

    return (
      <div style={wrapperStyles} id="placesMap">

        <ComposableMap
          projectionConfig={{
            scale: 200,
            rotation: [-11,0,0],
          }}
          width={1000}
          height={500}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[0,20]} disablePanning zoom = {1}>
            <Geographies geography={topology}>
              {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                <Geography
                  key={i}
                  geography={geography}
                  projection={projection}
                  style={{
                    default: {
                      fill: "#ECEFF1",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: "#ECEFF1",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#ECEFF1",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                  }}
                />
              ))}
            </Geographies>
            <Markers>
              {this.createMarker( -122.4, 37.7, 'San Francisco')}
                {this.createMarker( -118.2, 34, 'La Jolla')}
              {this.createMarker(-110.5, 44.4, 'Yellowstone')}
              {this.createMarker(135.8, 35, 'Kyoto and Osaka' )}
              {this.createMarker(  -74, 40.7, 'New York City')}
              {this.createMarker(-71, 42, 'Boston' )}
              {this.createMarker(116.4, 40, 'Beijing' )}
              {this.createMarker(121.6, 25, 'Taipei' )}
              {this.createMarker(127, 37.5, 'Seoul' )}
              {this.createMarker(139.7, 35.7, 'Tokyo' )}
              {this.createMarker(-77, 39, 'Washington D.C.')}
              {this.createMarker(2, 41, 'Barcelona')}
              {this.createMarker(-3.7, 40.4, 'Madrid')}
              {this.createMarker(-79, 43.2, 'Niagara Falls')}
              {this.createMarker(-120,  39, 'Lake Tahoe')}
              {this.createMarker(-115.1,  39, 'Las Vegas')}
              {this.createMarker(-122.3,  47.6, 'Seattle')}
              {this.createMarker(-123.1,  49.3, 'Vancouver')}
            </Markers>
            <Annotations>
              {annotation}
            </Annotations>
          </ZoomableGroup>
        </ComposableMap>


      </div>
    )
  }
}


export default Places;
