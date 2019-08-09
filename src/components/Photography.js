import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';

export default class Photography extends Component {
    constructor(props) {
        super(props);
        this.imageURLs = this.shuffle([
            {
                "static":"https://live.staticflickr.com/65535/48117911036_83ed6d0b61_o.jpg",
                "flickr":"https://www.flickr.com/photos/justin-chen/48117911036"
            },
            {
                "static":"https://live.staticflickr.com/65535/48392894377_a414bf12a8_o.jpg",
                "flickr":"https://www.flickr.com/photos/justin-chen/48392894377"
            },
            {
                "static":"https://live.staticflickr.com/7838/40510733443_9cb7a6138b_o.jpg",
                "flickr":"https://www.flickr.com/photos/justin-chen/40510733443"
            },
            {
                "static":"https://live.staticflickr.com/65535/48176365557_51fae28849_o.jpg",
                "flickr":"https://www.flickr.com/photos/justin-chen/48176365557"
            },
            {
                "static":"https://live.staticflickr.com/65535/48110480566_8fc25ed3fd_o.jpg",
                "flickr":"https://www.flickr.com/photos/justin-chen/48110480566"
            },
            {
                "static":"https://live.staticflickr.com/4910/46438286222_593c41e151_o.jpg",
                "flickr":"https://www.flickr.com/photos/justin-chen/46438286222"
            },
            {
                "static":"https://live.staticflickr.com/4835/46299198622_ae33b8cb54_o.jpg",
                "flickr":"https://www.flickr.com/photos/justin-chen/46299198622"
            },
            {
                "static":"https://live.staticflickr.com/65535/48450516996_59d04731bf_o.jpg",
                "flickr":"https://www.flickr.com/photos/justin-chen/48450516996"
            },
            {
                "static":"https://live.staticflickr.com/7817/47476865231_0a4b77c9b5_o.jpg",
                "flickr":"https://www.flickr.com/photos/justin-chen/47476865231"
            },
            {
                "static":"https://live.staticflickr.com/7817/46438289442_bd05ebf93b_o.jpg",
                "flickr":"https://www.flickr.com/photos/justin-chen/46438289442"
            },
            {
                "static":"https://live.staticflickr.com/4917/46299708762_0b3735106b_o.jpg",
                "flickr":"https://www.flickr.com/photos/justin-chen/46299708762"
            },
            {
                "static":"https://live.staticflickr.com/4866/45437591205_79a552d448_o.jpg",
                "flickr":"https://www.flickr.com/photos/justin-chen/45437591205"
            },
            {
                "static":"https://live.staticflickr.com/4912/46350554201_389d3e4128_o.jpg",
                "flickr":"https://www.flickr.com/photos/justin-chen/46350554201"
            },
            {
                "static":"https://live.staticflickr.com/4891/31409334207_d8b006528e_o.jpg",
                "flickr":"https://www.flickr.com/photos/justin-chen/31409334207"
            },
            {
                "static":"https://live.staticflickr.com/65535/48106606502_36d7d0e811_o.jpg",
                "flickr":"https://www.flickr.com/photos/justin-chen/48106606502"
            },
            {
                "static":"https://live.staticflickr.com/65535/40510732313_b2d6984db6_o.jpg",
                "flickr":"https://www.flickr.com/photos/justin-chen/40510732313"
            },
            {
                "static":"https://live.staticflickr.com/4865/32478071618_84d3725a84_o.jpg",
                "flickr":"https://www.flickr.com/photos/justin-chen/32478071618"
            },
            {
                "static":"https://live.staticflickr.com/4839/45437590515_846e87248a_o.jpg",
                "flickr":"https://www.flickr.com/photos/justin-chen/45437590515/"
            },
            {
                "static":"https://live.staticflickr.com/4883/45437588585_f55fecb5c8_o.jpg",
                "flickr":"https://www.flickr.com/photos/justin-chen/45437588585/"
            },
            {
                "static":"https://live.staticflickr.com/65535/48110585858_58d8c81ca9_o.jpg",
                "flickr":"https://www.flickr.com/photos/justin-chen/48110585858"
            }
        ]
    );
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
                <img src = {item.original} />
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
