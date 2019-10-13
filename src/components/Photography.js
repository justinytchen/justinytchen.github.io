import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';
import data from '../data.json';
import Gallery from 'react-photo-gallery'

export default class Photography extends Component {
    constructor(props) {
        super(props);
        this.state = {color: 'nocolor'};
        this.imageURLs = this.shuffle(data.photography);
        for(var i in this.imageURLs ){
            var curImage = this.imageURLs[i]
            curImage.src = curImage.static
            curImage.width = parseInt(curImage.width)
            curImage.height = parseInt(curImage.height)

        }
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    mouseEntered(){
        this.setState({
            color: 'color'
        });
    }

    mouseExited(){
        this.setState({color: 'nocolor'});
    }

    render() {
        return (
            <div
                className={this.state.color}
                onMouseEnter = {this.mouseEntered.bind(this)}
                onMouseLeave = {this.mouseExited.bind(this)}
            >
                <Gallery
                    photos={this.imageURLs}
                    margin = {5}
                    direction={'row'}
                    targetRowHeight = {500}
                />
            </div>

        );

    }
};
