import React, {Component} from 'react';
import Col from "react-bootstrap/Col";
import poster from "../images/poster.jpg";
import research from "../images/research.jpg";
import detour from "../images/detour.jpg";

export default class Work extends Component {
    render(){
        var imgStyle = {height:"175px"}

        return (
            <div className="work-container">
                <div className={"row"}>
                    <Col sm={4} >
                        <h5>PowerShell Semantic Highlighting</h5>
                        <a className= "icon-link" href={"https://devblogs.microsoft.com/powershell/semantic-highlighting-in-the-powershell-preview-extension-for-visual-studio-code/"}>
                            <img className="img-thumbnail" alt = "" src={"https://devblogs.microsoft.com/powershell/wp-content/uploads/sites/30/2020/07/syntax-highlighting.png"} style={imgStyle}/>
                        </a>
                        <p>One of the projects during my Microsoft internship</p>

                    </Col>
                    <Col sm={4}>
                        <h5>Detour</h5>
                        <a className= "icon-link" href="https://pathh-detour.herokuapp.com">
                            <img className="img-thumbnail" alt = "" src={detour} style = {imgStyle}/>
                        </a>
                        <p>A route planning web app for finding landmarks along a path (Project for CSE 110: Software Engineering) </p>
                    </Col>
                    <Col sm={4} >
                        <h5>Research Paper</h5>
                        <a className= "icon-link" href="https://doi.org/10.1088/1367-2630/aae3fb">
                            <img className="img-thumbnail" alt = "" src={research} style={imgStyle}/>
                        </a>
                        <p>Phase Cascade Lattice Rectifier Array: An Exactly Solvable Nonlinear Network Circuit</p>
                    </Col>
                </div>
                <div className={"row"}>
                    <Col sm={4} >
                        <h5>Research Poster</h5>
                        <a className= "icon-link" href={process.env.PUBLIC_URL + '/ResearchPoster.pdf'}>
                            <img className="img-thumbnail" alt = "" src={poster} style={imgStyle}/>
                        </a>
                        <p>Boston University Research in Science and Engineering Program </p>

                    </Col>
                    <Col sm={4} >
                    </Col>
                    <Col sm={4} >
                    </Col>
                </div>
            </div>
        );
    }
}