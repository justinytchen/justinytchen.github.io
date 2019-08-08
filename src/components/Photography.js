import React, {Component} from 'react';
import ImageGallery from 'react-image-gallery';
export default class Photography extends Component {
    render(){

        const imageURLs = [
            "https://live.staticflickr.com/65535/48117911036_83ed6d0b61_o.jpg",
            "https://live.staticflickr.com/65535/48392894377_a414bf12a8_o.jpg",
            "https://live.staticflickr.com/65535/48110572008_f3f5b7d5c6_o.jpg",
            "https://live.staticflickr.com/7838/40510733443_9cb7a6138b_o.jpg",
            "https://live.staticflickr.com/65535/48176365557_51fae28849_o.jpg",
            "https://live.staticflickr.com/65535/48110480566_8fc25ed3fd_o.jpg",
            "https://live.staticflickr.com/4910/46438286222_593c41e151_o.jpg",
            "https://live.staticflickr.com/4835/46299198622_ae33b8cb54_o.jpg",
            "https://live.staticflickr.com/65535/48450516996_59d04731bf_o.jpg",
            "https://live.staticflickr.com/7817/47476865231_0a4b77c9b5_o.jpg",
            "https://live.staticflickr.com/7817/46438289442_bd05ebf93b_o.jpg",
            "https://live.staticflickr.com/4917/46299708762_0b3735106b_o.jpg",
            "https://live.staticflickr.com/4866/45437591205_79a552d448_o.jpg",
            "https://live.staticflickr.com/4912/46350554201_389d3e4128_o.jpg",
            "https://live.staticflickr.com/4891/31409334207_d8b006528e_o.jpg"
        ];


        var images = [];
        for(var i in imageURLs){
            images.push({
                original: imageURLs[i],
                thumbnail: imageURLs[i]
            });
        }

        return (
            <ImageGallery items={images} showFullscreenButton={false} disableArrowKeys={true} showPlayButton={false}/>
        );
    }
};
