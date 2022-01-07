import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
export default class Home extends Component {
    render() {
        return (
            <div className="container2">
                <h1 className="page-header">Home</h1>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEp9Y3FX-3o1w/profile-displayphoto-shrink_800_800/0/1631640775932?e=1646870400&v=beta&t=ZN-LIe_2yz5abfGVfZzS-ARW9A8eMYQNbstVYBQwwjY" className="profile-picture"></img>
                <h3>Hello, I'm Zach Andrews. Welcome to my portfolio website.
                </h3>
                <h2 className='subtitle'>Skills</h2>
                <h3>Languages</h3>
                <div className='container3'>
                    <Row>
                        <Col>
                            <h5 className='skills'>Python</h5>
                        </Col>
                        <Col>
                            <h5 className='skills'>Java</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5 className='skills'>JavaScript</h5>
                        </Col>
                        <Col>
                            <h5 className='skills'>PHP</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5 className='skills'>HTML</h5>
                        </Col>
                        <Col>
                            <h5 className='skills'>CSS</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5 className='skills'>SQL</h5>
                        </Col>
                        <Col>
                            <h5 className='skills'>R</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5 className='skills'>Perl</h5>
                        </Col>
                        <Col>
                            <h5 className='skills'>Ruby</h5>
                        </Col>
                    </Row>
                </div>
                <h3>Frameworks</h3>
                <div className='container3'>
                <Row>
                        <Col>
                            <h5 className='skills'>React</h5>
                        </Col>
                        <Col>
                            <h5 className='skills'>Angular</h5>
                        </Col>
                    </Row>
                    </div>
                <h3>Operating Systems</h3>
                <h3>AWS</h3>
                <h3>Other</h3>
                <h2 className='subtitle'>Experience</h2>
                <h2 className='subtitle'>Education</h2>
            </div>
        )
    }
}
