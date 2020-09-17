import React, {Component} from 'react';
import TabContainer from "./TabContainer";
import { FaInstagram } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFlickr } from 'react-icons/fa';

class MainContainer extends Component{
    render(){
        var commitDateString = Date(process.env.REACT_APP_GIT_SHA_DATE).toLocaleUpperCase();
        
        return (
            <div className="App">
                <header>
                    commit {process.env.REACT_APP_GIT_SHA}: "{process.env.REACT_APP_GIT_SHA_MESSAGE}", {commitDateString.substring(0, commitDateString.indexOf("GMT")-1)}
                </header>
                <div className="jumbotron jumbotron bg-cover" style = {{
                    "marginLeft": "150px",
                    "marginRight": "150px"
                }}>
                    <div className="overlay"></div>
                    <div className="container">
                        <h1 className="display-3 mb-1">Justin Chen</h1>
                        <div className="page-footer font-small blue">

                            <div className="footer-copyright text-center py-3">
                                <a className= "icon-link" href="mailto: jyc135@ucsd.edu">
                                    <FaEnvelope size="2em"/>
                                </a>
                                <a className= "icon-link" href="https://www.linkedin.com/in/justinytchen/">
                                    <FaLinkedin size="2em"/>
                                </a>
                                <a className= "icon-link" href="https://flickr.com/justin-chen">
                                    <FaFlickr size="2em"/>
                                </a>
                                <a className= "icon-link" href="http://instagram.com/justinytchen">
                                    <FaInstagram size="2em"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="main">
                    <TabContainer tab={this.props.tab}/>
                </section>
            </div>
        );
    }
}

export default MainContainer;