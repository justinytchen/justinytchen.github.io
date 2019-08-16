import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Education from "./Education";
import Work from "./Work";
import Photography from "./Photography";

export default class TabContainer extends Component {

    constructor(props){
        super(props);
        var curUrl = window.location.href;
        var lastIndex = curUrl.lastIndexOf("/#");

        const validTabs = ["aboutme", "education", "experience", "work", "photography"]
        var curTab = validTabs[0]
        if(lastIndex > 0){
            var tab = curUrl.substring(lastIndex + 2)
            if(validTabs.includes(tab)){
                curTab = tab;
            }
        }
        this.state = {
            tabKey: curTab
        };
    }

    setTabKey(e){
        this.setState({tabKey: e})
    }

    render() {
        window.history.pushState(this.state.tabKey, this.state.tabKey, '/#' + this.state.tabKey);
        return (
            <div className="main-container col-sm-12">
                <Tab.Container id="tab-container" defaultActiveKey="aboutme" activeKey={this.state.tabKey} onSelect={this.setTabKey.bind(this)}>
                    <Row>
                        <Col sm={2} id="tab-nav">
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="aboutme">about me</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="education">education</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="experience">experience</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="work">work</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="photography">photography</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col className = "tab-content" sm={10}>
                            <Tab.Content>
                                <Tab.Pane eventKey="aboutme">
                                    <AboutMe />
                                </Tab.Pane>
                                <Tab.Pane eventKey="education">
                                    <Education />
                                </Tab.Pane>
                                <Tab.Pane eventKey="experience">
                                    <Experience />
                                </Tab.Pane>
                                <Tab.Pane eventKey="work">
                                    <Work />
                                </Tab.Pane>
                                <Tab.Pane eventKey="photography">
                                    <Photography />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
};