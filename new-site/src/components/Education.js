import React, {Component} from 'react';
import Col from "react-bootstrap/Col";

export default class Education extends Component {
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
                            <Col sm={6} >
                                <ul>
                                    <li className="course-item">CSE 11: Intro to Computer Science & OO</li>
                                    <li className="course-item">CSE 12: Basic Data Structures & OO Design</li>
                                    <li className="course-item">CSE 20: Discrete Mathematics</li>
                                    <li className="course-item">CSE 21: Mathematics for Algorithm and Systems</li>
                                    <li className="course-item">CSE 100: Advanced Data Structures</li>
                                    <li className="course-item">MATH 183: Statistical Methods</li>
                                    <li className="course-item">CSE 101: Design & Analysis of Algorithm </li>
                                    <li className="course-item">CSE 150: Intro to AI: Search & Reasoning</li>
                                </ul>
                            </Col>
                            <Col sm={6} >
                                <ul>
                                    <li className="course-item">MATH 18: Linear Algebra</li>
                                    <li className="course-item">CSE 15L: Software Tools & Techniques Lab</li>
                                    <li className="course-item">MATH 20C: Multivariable Calculus</li>
                                    <li className="course-item">CSE 30: Computer Organization & Systems Programming</li>
                                    <li className="course-item">CSE 105: Theory of Computation</li>
                                    <li className="course-item">CSE 132A: Database System Principles </li>
                                    <li className="course-item">CSE 110: Software Engineering</li>
                                    <li className="course-item">CSE 140/140L: Component & Design Technology/Digital Systems</li>
                                </ul>
                            </Col>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}