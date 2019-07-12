import React from 'react';
import ShoesContainer from './ShoesContainer';
import data from '../data.json'

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.processData(data)
        };
    }

    processData(data) {
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

    getRandomShoe() {
        if (!this.state.data)
            return null
        var keys = Object.keys(this.state.data)
        return this.state.data[keys[keys.length * Math.random() << 0]];
    }

    render() {
        var shoe1 = this.getRandomShoe();
        var shoe2 = this.getRandomShoe();
        console.log(shoe1, shoe2);
        return (
            <div>
                <h1>Choose one</h1>
                <ShoesContainer shoe1={shoe1} shoe2={shoe2}/>
            </div>
        );
    }
}

export default MainContainer;
