import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';
import data from '../data.json';
import Gallery from 'react-photo-gallery'

export default class Photography extends Component {
    constructor(props) {
        super(props);
        this.state = {color: 'nocolor'};
        this.imageURLs = data.photography;
        for(var i in this.imageURLs ){
            var curImage = this.imageURLs[i]
            curImage.src = curImage.static
            curImage.width = parseInt(curImage.width)
            curImage.height = parseInt(curImage.height)

        }
    }

    mouseEntered(){
        console.log("mouseEntered");
        this.setState({
            color: 'color'
        });
    }

    mouseExited(){
        console.log("mouseLeave");
        this.setState({color: 'nocolor'});
    }

    render() {
        console.log(this.state.color);
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
                    targetRowHeight = {250}
                />
            </div>

        );

    }
};
