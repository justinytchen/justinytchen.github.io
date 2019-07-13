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
            "maxWidth": "60%",
        };

        const dispStyle = {
            "display": display,
            "flexDirection": "column"
        };

        var shoe1Name = this.props.shoe1.name.replace(/&quot;/g, '\\"');
        var shoe2Name = this.props.shoe2.name.replace(/&quot;/g, '\\"');

        return (
            <div>
                <div>
                    {this.state.status}
                </div>

                <div className = "shoesContainer">
                    <div className = "shoeContainer" style = {dispStyle} >
                        <div></div>
                        <img
                            className = "shoeImage"
                            style={style}
                            src={this.props.shoe1.image}
                            onLoad={this.handleImage1Loaded.bind(this)}
                            onError={this.handleImage1Errored.bind(this)}
                        />
                    </div>

                    <div className = "shoeContainer" style = {dispStyle}>
                        <div></div>
                        <img
                            className = "shoeImage"
                            style={style}
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
