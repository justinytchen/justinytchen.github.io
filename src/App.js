import React from 'react';
import './App.css';
import TabContainer from "./components/TabContainer";
import { FaInstagram } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFlickr } from 'react-icons/fa';

function App() {
  return (
    <div className="App">

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
            <TabContainer/>
        </section>
    </div>
  );
}

export default App;
