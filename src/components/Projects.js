import React, { Component } from 'react'
import { Container, Row, Col, Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default class Projects extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className="page-header">Projects</h1>

                <Card>
                    <Card.Img className='card-images2' variant="top" src="https://user-images.githubusercontent.com/68918006/148008701-94ca0683-bb5d-4aa6-a555-245257557748.png" />
                    <Card.Body>
                        <Card.Title className='card-font' >NHL Shot Maps</Card.Title>
                        <Card.Text className='card-font' >
                            A few Python programs to chart NHL teams shots.
                        </Card.Text>
                        <div class="col text-center">
                            <Button variant="dark">Learn More</Button>
                        </div>
                    </Card.Body>
                </Card>
                <br></br>
                <Card>
                    <Card.Img className='card-images2' variant="top" src="https://user-images.githubusercontent.com/68918006/137642521-cf2c39c2-34c6-4b5a-a126-7456975937d7.png" />
                    <Card.Body>
                        <Card.Title className='card-font' >NHL Goal Differential</Card.Title>
                        <Card.Text className='card-font' >
                            A Python program to chart NHL teams goal differential from game to game.
                        </Card.Text>
                        <div class="col text-center">
                            <Button variant="dark">Learn More</Button>
                        </div>
                    </Card.Body>
                </Card>
                <br></br>
                <Card>
                    <Card.Img className='card-images2' variant="top" src="https://user-images.githubusercontent.com/68918006/114966410-7d2b0900-9e40-11eb-84df-f44418d7dffd.png" />
                    <Card.Body>
                        <Card.Title className='card-font' >MLB Polar Charts</Card.Title>
                        <Card.Text className='card-font' >
                            Python programs to chart an MLB hitter's statistics with a polar chart.
                        </Card.Text>
                        <div class="col text-center">
                            <Button variant="dark">Learn More</Button>
                        </div>
                    </Card.Body>
                </Card>
                <br></br>
                <Card>
                    <Card.Img className='card-images2' variant="top" src="https://user-images.githubusercontent.com/68918006/142657452-f41ae6a1-ea78-413e-a0e2-503e75883884.png" />
                    <Card.Body>
                        <Card.Title className='card-font' >Sleeper Points Above Expected</Card.Title>
                        <Card.Text className='card-font' >
                            A Python program to chart how well or poorly your Sleeper fantasy football team is performing.
                        </Card.Text>
                        <div class="col text-center">
                            <Button variant="dark">Learn More</Button>
                        </div>
                    </Card.Body>
                </Card>
                <br></br>
                <Card>
                    <Card.Img className='card-images2' variant="top" src="./wwjd.jpg" />
                    <Card.Body>
                        <Card.Title className='card-font' >Fantasy Football Team Website</Card.Title>
                        <Card.Text className='card-font' >
                            A React website for my fantasy football team.
                        </Card.Text>
                        <div class="col text-center">
                            <Button variant="dark">Learn More</Button>
                        </div>
                    </Card.Body>
                </Card>
                <br></br>
                <Card>
                    <Card.Img className='card-images2' variant="top" src="./lc.jpg" />
                    <Card.Body>
                        <Card.Title className='card-font' >LouCoin Website</Card.Title>
                        <Card.Text className='card-font' >
                            Islanders website that tracks a fake cryptocurrency.
                        </Card.Text>
                        <div class="col text-center">
                            <Button variant="dark">Learn More</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
