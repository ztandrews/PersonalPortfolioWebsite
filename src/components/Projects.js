import React, { Component, useState } from 'react'
import { Container, Row, Col, Card, Button, OverlayTrigger, Tooltip, Modal } from 'react-bootstrap';


const Project = () => {
    const [showShotMaps, setShowShotMaps] = useState(false);
    const [showGoalDiff, setShowGoalDiff] = useState(false);
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
                    <div className="col text-center">
                        <Button variant="dark" onClick={() => setShowShotMaps(true)}>Learn More</Button>
                        <Modal show={showShotMaps} onHide={() => setShowShotMaps(false)} size="lg">
                            <Modal.Header closeButton>
                           <Modal.Title>NHL Shot Maps</Modal.Title> 
                            </Modal.Header>
                            <Modal.Body>
                            <div className='container'>
                                <p>Put github link here</p>
                                <h6>&emsp;The NHL Shot Maps programs I made are written in Python and each serve their own purposes. I will breifly go through the implementation of them, followed by example outputs from
                                    each of the files in the GitHub repo.<br></br>
                                    &emsp;Developing these programs took a lot of trial and error, but as a lifelong hockey fan, it was
                                    something I was driven to accomplish. My main tools for this project were Python, Matplotlib, the NHLRink package (which
                                    allowed me to use a beautiful rink as a background for the plots), and most importantly, the undocumented NHL API. 
                                </h6>
                            <img className="img-fluid" src="https://user-images.githubusercontent.com/68918006/148008701-94ca0683-bb5d-4aa6-a555-245257557748.png"></img> 
                            </div>
                            </Modal.Body>
                        </Modal>
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
                    <div className="col text-center">
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
                    <div className="col text-center">
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
                    <div className="col text-center">
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
                    <div className="col text-center">
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
                    <div className="col text-center">
                        <Button variant="dark">Learn More</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Project;
