import React from 'react';
import ShoesContainer from './ShoesContainer';
import data from '../data.json'
import DatabaseManager from '../mgr/DatabaseManager';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.processData(data)
        };

        this.dbMgr = new DatabaseManager(this.props.db);
    }

    componentDidMount(){
        this.showNewShoes();
    }

    processData(data){
        var results = {};
        for (var i = 0; i < data.length; i++) {
            var curPage = data[i]["itemListElement"];

            for (var j = 0; j < curPage.length; j++) {
                var curItem = curPage[j].item;
                results[curItem.name] = curItem;
            }
        }
        return results;
    }


    shoeSelected(winner){
        var oldShoe1 = this.state.shoe1.name;
        var oldShoe2 = this.state.shoe2.name;
        this.dbMgr.getEloData(
            (data) => {
                var newRatings = this.calculateNewRatings(data[oldShoe1], data[oldShoe2], winner);
                data[oldShoe1] = newRatings[0];
                data[oldShoe2] = newRatings[1];
                this.dbMgr.writeEloData(data);
            }
        );

        this.showNewShoes();
    }

    calculateNewRatings(r1, r2, winner){
        var p1 = (1.0 / (1.0 + Math.pow(10, ((r2 - r1) / 400))));
        var p2 = (1.0 / (1.0 + Math.pow(10, ((r1 - r2) / 400))));

        var k = 50;
        if(winner == "1"){
            r1 = r1 + k*(1 - p1);
            r2 = r2 + k*(0 - p2);
        }
        else{
            r1 = r1 + k*(0 - p1);
            r2 = r2 + k*(1 - p2);
        }
        return [Math.round(r1), Math.round(r2)];
    }

    resetEloMap(data){
        var results = {};

        for (var key in data) {
            // check if the property/key is defined in the object itself, not in parent
            if (data.hasOwnProperty(key)) {
                results[key] = 1200;
            }
        }

        this.dbMgr.writeEloData(results);
    }

    getRandomShoe() {
        if (!this.state.data)
            return null
        var keys = Object.keys(this.state.data)
        return this.state.data[keys[keys.length * Math.random() << 0]];
    }

    componentWillUnmount() {
        this.firebaseRef.off();
    }

    getTwoRandomShoes(){
        var shoe1 = this.getRandomShoe();
        var shoe2 = this.getRandomShoe();
        while(shoe1.name == shoe2.name)
            shoe2 = this.getRandomShoe();
        return [shoe1, shoe2];
    }

    showNewShoes(){
        var shoes = this.getTwoRandomShoes();
        this.setState({shoe1: shoes[0], shoe2: shoes[1]});
    }

    render() {
        var shoesContainer = null;
        if(this.state.shoe1 && this.state.shoe2){
            shoesContainer =
                <ShoesContainer shoeSelectedCallback = {this.shoeSelected.bind(this)}
                                shoe1={this.state.shoe1} shoe2={this.state.shoe2}/>;
        }
        return (
            <div>
                <h1>Choose one</h1>
                {shoesContainer}
            </div>
        );
    }
}

export default MainContainer;
