import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';
import data from '../data.json';

export default class Photography extends Component {
    constructor(props) {
        super(props);
        this.imageURLs = this.shuffle(data.photography);
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

    renderItem(item) {
        return (
            <div className='image-gallery-image'>
                <a href={item.flickrLink}>
                <img src = {item.original}  alt = ""/>
                </a>
            </div>
        );
    }

    render() {
        var images = [];
        for (var i in this.imageURLs) {
            var staticUrl = this.imageURLs[i].static
            var flickrUrl = this.imageURLs[i].flickr
            images.push({
                original: staticUrl,
                flickrLink: flickrUrl,
                renderItem: this.renderItem.bind(this)
            });
        }

        return (
            <ImageGallery items={images} showFullscreenButton={false} disableArrowKeys={true} showPlayButton={false}/>
        );
    }
};
