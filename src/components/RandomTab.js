import React, { Component } from 'react';
import Places from './Places.js';

class RandomTab extends Component {
  constructor(props){
    super(props);
    this.twitterHandles = ["warriors", "UCSanDiego", "PopSci", "nbcbayarea", "NBA", "mercnews", "JLin7", "GordonRamsay", "elonmusk", "altonbrown"];
  }

  render() {
    var arr = []
    while(arr.length < 3){
        var randomnumber = Math.floor(Math.random()*this.twitterHandles.length);
        if(arr.indexOf(randomnumber) > -1) continue;
        arr[arr.length] = randomnumber;
    }
    let i = 0;
    let twitterDescription = "Here are random Twitter accounts I am following";

    let twitterWidgetOptions = {
      cards:"hidden",
      theme: "light",
      height: '400',
      linkColor: '#2b7bb9',
      chrome: "noheader, nofooter"
    };

    return (
      <div id = "random-tab">
        <div className = "intro-image">
          <div id="mapPlaces">
            <h1 className="random-header">{"Here's a map of all the places in the world I have visited."}</h1>
            <Places />
          </div>
        </div>
      </div>
    );
  }
}


export default RandomTab;
