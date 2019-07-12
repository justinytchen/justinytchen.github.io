import React from 'react';

class ShoesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {image1Status: "loading", image2Status: "loading", status:"loading"};
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

    render() {
        var display = "none";
        if(!this.state.status)
            display = "flex";
        const style = {
            "maxWidth": "100%",
        };

        const dispStyle = {
            "display": display,
            "flex-direction": "column"
        };

        console.log(this.props.shoe1, this.props.shoe2);
        return (
            <div>
                <div>
                    {this.state.status}
                </div>

                <div className = "shoesContainer">
                    <div className = "shoeContainer" style = {dispStyle} >
                        <img
                            className = "shoeImage"
                            style={style}
                            src={this.props.shoe1.image}
                            onLoad={this.handleImage1Loaded.bind(this)}
                            onError={this.handleImage1Errored.bind(this)}
                        />
                        <h2>{this.props.shoe1.name}</h2>
                    </div>

                    <div className = "shoeContainer" style = {dispStyle}>
                        <img
                            className = "shoeImage"
                            style={style}
                            src={this.props.shoe2.image}
                            onLoad={this.handleImage2Loaded.bind(this)}
                            onError={this.handleImage2Errored.bind(this)}
                        />
                        <h2>{this.props.shoe2.name}</h2>
                    </div>
                </div>




            </div>
        );
    }
}

export default ShoesContainer;
