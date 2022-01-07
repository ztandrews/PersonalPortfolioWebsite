import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="page-header">Home</h1>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEp9Y3FX-3o1w/profile-displayphoto-shrink_800_800/0/1631640775932?e=1646870400&v=beta&t=ZN-LIe_2yz5abfGVfZzS-ARW9A8eMYQNbstVYBQwwjY" className="profile-picture"></img>
            </div>
        )
    }
}
