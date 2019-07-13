import React from 'react';
import * as Constants from '../Constants';

class ShoesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {image1Status: "loading", image2Status: "loading", status:"loading", shoe1Opacity:Constants.DEFAULT_OPACITY, shoe2Opacity: Constants.DEFAULT_OPACITY};
    }

    handleImage1Loaded() {
        this.setState({image1Status: null, status: this.state.image2Status});
    }

    handleImage1Errored() {
        this.setState({image1Status: null});
        console.log("error");
    }

    handleImage2Loaded() {
        this.setState({image2Status: null, status: this.state.image1Status});
    }

    handleImage2Errored() {
        this.setState({image2Status: null});
        console.log("error");
    }

    handleImage1Clicked(){
        this.setState({
            shoe1Opacity:Constants.DEFAULT_OPACITY,image1Status: "loading", image2Status: "loading", status:"loading",
        });

        this.props.shoeSelectedCallback("1");
    }

    handleImage2Clicked(){
        this.setState({
            shoe2Opacity:Constants.DEFAULT_OPACITY,image1Status: "loading", image2Status: "loading", status:"loading",
        });

        this.props.shoeSelectedCallback("2");
    }

    handleImage1mouseDown(){
        this.setState({
            shoe1Opacity:Constants.CLICK_OPACITY
        });
    }

    handleImage2mouseDown(){
        this.setState({
            shoe2Opacity:Constants.CLICK_OPACITY
        });
    }

    handleMouseRelease(){
        this.setState({
            shoe1Opacity:Constants.DEFAULT_OPACITY,
            shoe2Opacity:Constants.DEFAULT_OPACITY
        });
    }

    handleImage1mouseEnter(){
        this.setState({
            shoe1Opacity:Constants.HOVER_OPACITY
        });
    }

    handleImage2mouseEnter(){

        this.setState({
            shoe2Opacity:Constants.HOVER_OPACITY
        });
    }

    handleMouseLeave(){
        this.setState({
            shoe1Opacity:Constants.DEFAULT_OPACITY,
            shoe2Opacity:Constants.DEFAULT_OPACITY
        });
    }


    render() {
        var display = "none";
        if(!this.state.status)
            display = "flex";
        const img1Style = {
            "maxWidth": "60%",
            "opacity": (this.state.shoe1Opacity),
        };

        const img2Style = {
            "maxWidth": "60%",
            "opacity": (this.state.shoe2Opacity),
        };

        const dispStyle = {
            "display": display,
            "flexDirection": "column"
        };

        var shoe1Name = this.props.shoe1.name.replace(/&quot;/g, '\"');
        var shoe2Name = this.props.shoe2.name.replace(/&quot;/g, '\"');

        return (
            <div>
                <div>
                    {this.state.status}
                </div>

                <div className = "shoesContainer">
                    <div className = "shoeContainer" style = {dispStyle} onClick = {this.handleImage1Clicked.bind(this)}
                        onMouseDown={this.handleImage1mouseDown.bind(this)} onMouseUp={this.handleMouseRelease.bind(this)}
                        onMouseLeave={this.handleMouseLeave.bind(this)} onMouseEnter={this.handleImage1mouseEnter.bind(this)}>
                        <div></div>
                        <img
                            className = "shoeImage"
                            style={img1Style}
                            src={this.props.shoe1.image}
                            onLoad={this.handleImage1Loaded.bind(this)}
                            onError={this.handleImage1Errored.bind(this)}
                        />
                    </div>

                    <div className = "shoeContainer" style = {dispStyle} onClick = {this.handleImage2Clicked.bind(this)}
                         onMouseDown={this.handleImage2mouseDown.bind(this)} onMouseUp={this.handleMouseRelease.bind(this)}
                         onMouseLeave={this.handleMouseLeave.bind(this)} onMouseEnter={this.handleImage2mouseEnter.bind(this)}>
                        <div></div>
                        <img
                            className = "shoeImage"
                            style={img2Style}
                            src={this.props.shoe2.image}
                            onLoad={this.handleImage2Loaded.bind(this)}
                            onError={this.handleImage2Errored.bind(this)}
                        />
                    </div>
                </div>
                <div className = "shoesContainer">
                    <div className = "shoeContainer" style = {dispStyle} >
                        <h2>{shoe1Name}</h2>
                    </div>

                    <div className = "shoeContainer" style = {dispStyle}>
                        <h2>{shoe2Name}</h2>
                    </div>
                </div>



            </div>
        );
    }
}

export default ShoesContainer;
