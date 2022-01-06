import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="page-header">Home</h1>

                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEp9Y3FX-3o1w/profile-displayphoto-shrink_800_800/0/1631640775932?e=1646870400&v=beta&t=ZN-LIe_2yz5abfGVfZzS-ARW9A8eMYQNbstVYBQwwjY" className="profile-picture"></img>

                <h2 className="subtitle">Hello, I'm Zach Andrews!</h2>
                <div className='container2'>
                    <h2 className="subtitle">Skills</h2>
                    <h3 className="subtitle2">Languages</h3>
                    <Container>
                        <Row>
                            <Col>Python</Col>
                            <Col>Java</Col>
                           
                        </Row>
                        <Row>
                            <Col>JavaScript</Col>
                            <Col>SQL</Col>
                        </Row>
                        <Row>
                            <Col>Bash</Col>
                            <Col>R</Col>
                        </Row>
                        <Row>
                            <Col>Ruby</Col>
                            <Col>Perl</Col>
                        </Row>
                        <Row>
                            <Col>PHP</Col>
                            <Col>C++</Col>
                        </Row>
                        <Row>
                            <Col>PLSQL</Col>
                            <Col></Col>
                        </Row>

                    </Container>
                    <h3 className="subtitle2">Frameworks</h3>
                    <Container>
                        <Row>
                            <Col>React</Col>
                            <Col>Angular</Col>
                        </Row>
                        <Row>
                            <Col>Django</Col>
                            <Col></Col>
                        </Row>
                    </Container>
                    <h3 className="subtitle2">Operating Systems</h3>
                    <Container>
                        <Row>
                            <Col>Windows</Col>
                            <Col>Ubuntu</Col>
                        </Row>
                        <Row>
                            <Col>MacOS</Col>
                            <Col>SunOS</Col>
                        </Row>
                    </Container>
                    <h3 className="subtitle2">Methodologies</h3>
                     <Container>
                        <Row>
                            <Col>Agile</Col>
                            <Col>DevOps</Col>
                        </Row>
                        <Row>
                            <Col>DevSecOps</Col>
                            <Col></Col>
                        </Row>
                    </Container>
                    <h3 className="subtitle2">Other</h3>
                    <Container>
                        <Row>
                            <Col>AWS</Col>
                            <Col>Git</Col>
                        </Row>
                        <Row>
                            <Col>MongoDB</Col>
                            <Col>Splunk</Col> 
                        </Row>
                        <Row>
                            <Col>PowerApps</Col>
                            <Col>Raspberry Pi</Col>
                        </Row>
                        <Row>
                            <Col>App Dynamics</Col>
                            <Col></Col>
                        </Row>
                    </Container>
                    <h2 className="subtitle">Experience</h2>
                    <h2 className="subtitle">Education</h2>
                </div>
            </div>
        )
    }
}
