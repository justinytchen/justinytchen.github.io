import React, {Component} from 'react';
import pfp from "../images/pfp2.jpg"
import Button from "react-bootstrap/Button"
import { FaDownload } from 'react-icons/fa';

export default class AboutMe extends Component {

    render() {
        return (
            <section>
                <div className="container">
                    <div className="col-md-12">
                        <div className="image-wrapper float-left pr-3">
                            <img src={pfp} alt="" className="pfp"/>
                        </div>
                        <div className="single-post-content-wrapper about-me-description">
                            <p>I'm currently a third year student at the University of California, San Diego pursuing a Bachelor of Science
                                in Computer Science. Prior to college, I lived in the suburbs of Cupertino, in the heart
                                of the Silicon Valley, where I naturally developed a passion for anything tech-related.</p>

                            <p>I have experience created/used various APIs, worked with different databases, and developed friendly user interfaces.
                                I've used tools/frameworks like React, MySQL, and Splunk. In the past, I have worked at Lacework, a cloud security startup
                                based in Mountain View CA, and American Express, in New York City. I will be
                                also working as a research assistant at Vecchio Lab in the fall</p>
                            <p>In my free time, I enjoy learning
                                new board games, playing and watching basketball, and practicing photography.</p>

                        </div>
                    </div>
                    <Button variant="outline-dark" href="https://drive.google.com/file/d/1JNLrkhHpC7GvdEChPxdhB5Z_VusBbbYd/view"><FaDownload />{" Download Resume"}</Button>
                </div>
            </section>

        );
    }
};