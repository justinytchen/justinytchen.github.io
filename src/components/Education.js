import React, {Component} from 'react';
import Col from "react-bootstrap/Col";
import ReactTooltip from 'react-tooltip';
import data from '../data.json';

export default class Education extends Component {

    getClassItem(courseName){
        var description = data.classes[courseName].description.split(". ");

        var tooltipString = ""
        for(var i = 0 ; i < description.length; i++){
            tooltipString += description[i];
            if(i < description.length - 1){
                tooltipString += "<br>";
            }
        }

        return (
            <li className="course-item" data-tip={tooltipString}>{courseName + ": " + data.classes[courseName].name}</li>
        );
    }

    render(){
        return (
            <div className="container">

                <div className="col-md-12">
                    <div>
                        <div className={"experience-el row"}>
                            <div className="employer col-sm-7">
                                <h5>University of California, San Diego</h5>
                            </div>
                            <div className="location col-sm-5">
                                <h5>La Jolla, CA</h5>
                            </div>
                        </div>

                        <div className={"experience-el row"} id="education-descriptor">
                            <div className="role col-sm-7">
                                <h6>Bachelor of Science, Computer Science</h6>
                            </div>
                            <div className="time col-sm-5">
                                <h6>September 2017 - June 2021</h6>
                            </div>
                        </div>
                        <div className={"experience-el row"} id="courses-taken">
                            <Col sm={12} >
                                <h1>Upper Division CS Classes</h1>
                            </Col>
                            <Col sm={6} >
                                <ul>
                                    {this.getClassItem("CSE 100")}
                                    {this.getClassItem("CSE 101")}
                                    {this.getClassItem("CSE 105")}
                                    {this.getClassItem("CSE 110")}
                                    {this.getClassItem("CSE 120")}
                                    {this.getClassItem("CSE 127")}
                                    {this.getClassItem("CSE 132A")}
                                </ul>
                            </Col>
                            <Col sm={6} >
                                <ul>
                                    {this.getClassItem("CSE 140/140L")}
                                    {this.getClassItem("CSE 141/141L")}
                                    {this.getClassItem("CSE 150")}
                                    {this.getClassItem("CSE 151")}
                                    {this.getClassItem("CSE 156")}
                                </ul>
                            </Col>
                            <Col sm={12} >
                            </Col>
                            <Col sm={6} >
                                <h1>Lower Division CS Classes</h1>
                                <ul>
                                    {this.getClassItem("CSE 11")}
                                    {this.getClassItem("CSE 12")}
                                    {this.getClassItem("CSE 15L")}
                                    {this.getClassItem("CSE 20")}
                                    {this.getClassItem("CSE 21")}
                                    {this.getClassItem("CSE 30")}
                                </ul>
                            </Col>
                            <Col sm={6} >
                                <h1>Other Technical Classes</h1>
                                <ul>
                                    {this.getClassItem("MATH 18")}
                                    {this.getClassItem("MATH 20C")}
                                    {this.getClassItem("MATH 183")}
                                    {this.getClassItem("COGS 108")}
                                    {this.getClassItem("LIGN 165")}
                                </ul>
                            </Col>
                            {/*<ReactTooltip multiline = {true} type = "light" border = {true}/>*/}
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}