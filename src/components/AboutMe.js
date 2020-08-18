import React, {Component} from 'react';
import pfp from "../images/pfp5.jpg"
import Button from "react-bootstrap/Button"
import {FaDownload} from 'react-icons/fa';

export default class AboutMe extends Component {

    render() {
        return (
            <section>
                <div className="about-me container">
                    <div className="col-md-12">
                        <div className="image-wrapper float-left pr-3">
                            <img src={pfp} alt="" className="pfp"/>
                        </div>
                        <div className="single-post-content-wrapper about-me-description">
                            <p>Hello! I am a third year student at the University of California, San Diego pursuing a Bachelor
                                of Science
                                in Computer Science. Before college, I lived in the suburbs of Cupertino, in the heart
                                of the Silicon Valley, where I naturally developed a passion for anything tech-related.
                            </p>

                            <p>In the past, I have worked at Lacework, a cloud security startup
                                based in Mountain View, California, and American Express, a financial services corporation in New York City. This past summer, I interned (remotely)
                                at Microsoft on the PowerShell team.
                                Through these experiences, I have learned how to create and use different APIs, interact with different database systems, and develop
                                friendly user interfaces; I have also become familiar with many tools/frameworks such as React, MySQL, and Splunk.
                            </p>
                            <p>In my free time, I enjoy learning new board games, playing and watching basketball, and practicing photography.</p>

                        </div>
                    </div>
                    <Button variant="outline-dark" id="download-resume"
                            href={process.env.PUBLIC_URL + '/Resume.pdf'}><FaDownload/>{" Download Resume"}
                    </Button>
                </div>
            </section>

        );
    }
};