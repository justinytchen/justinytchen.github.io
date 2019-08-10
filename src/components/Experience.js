import React, {Component} from 'react';
import data from '../data.json';

export default class Experience extends Component {
    render(){
        return (
            <div className="container">

                <div className="col-md-12">
                    {this.getAllResumeItems()}
                </div>
            </div>
        );
    }

    getAllResumeItems(){
        var resumeItems = [];
        var i = 0;
        var resumeData = data.experience;
        for(var e in resumeData){
            resumeItems.push(<div key = {i++}>{this.getResumeItem(resumeData[e])}</div>)
        }

        return resumeItems
    }

    getResumeItem(obj){
        var descriptionList = []
        var i = 0

        for(var e in obj["description"]){
            descriptionList.push(<li key={i++}>{obj["description"][e]}</li>);
        }

        return (
            <div>
                <div className={"experience-el row"}>
                    <div className="employer col-sm-7">
                        <h5>{obj["employer"]}</h5>
                    </div>
                    <div className="location col-sm-5">
                        <h5>{obj["location"]}</h5>
                    </div>
                </div>

                <div className={"experience-el row"}>
                    <div className="role col-sm-7">
                        <h6>{obj["role"]}</h6>
                    </div>
                    <div className="time col-sm-5">
                        <h6>{obj["time"]}</h6>
                    </div>
                </div>
                <div className={"experience-el row"}>
                    <ul className="description">
                        {descriptionList}
                    </ul>
                </div>
            </div>

        );
    }
};