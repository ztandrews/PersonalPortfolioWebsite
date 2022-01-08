import React, { Component, useState } from 'react'
import { Container, Row, Col, Card, Button, OverlayTrigger, Tooltip, Modal } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';


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
                           <Modal.Title><h5 className='left'>NHL Shot Maps</h5></Modal.Title> 
                           
                            </Modal.Header>
                            <Modal.Body>
                            <div className='container'>
                                <h6>&emsp;The NHL Shot Maps programs I made are written in Python and each serve their own purposes. I will breifly go through the implementation of them, followed by example outputs from
                                    each of the files in the GitHub repo.<br></br>
                                    &emsp;As a lifelong hockey fan, I thought it would be a fun project for me to experiment with the undocumented NHL API and create various shot maps from the data given.
                                    I used this program as an oppertunity to learn some data science skills, speciffically data visualization. I utilized the NHL API to get shot data, and the Python packages Matplotlib, Seaborn, and NHLRink to 
                                    create the diagrams. I will show example outputs for what each program does, but feel free
                                    to take a look at the GitHub repo for a more in-depth look at the code for each program.
                                </h6>
                                <h5 className='left'>Single Game Shots</h5>
                                <img className="img-fluid" src = "https://user-images.githubusercontent.com/68918006/147365443-03a3921e-cc6d-416f-b179-0806c7c08ffd.png"></img>
                           <h6>&emsp;This program generates a shot map for a specified NHL game, plotting the home team on the right side and the away team on the left. Each shot is color and shape coordinated
                              based on the result of the shot. 
                           </h6>
                           <h5 className='left'>All Team Shots (Smooth)</h5>
                            <img className="img-fluid" src="https://user-images.githubusercontent.com/68918006/148008701-94ca0683-bb5d-4aa6-a555-245257557748.png"></img> 
                            <h6>&emsp;This program shows all shots taken by an NHL team in a given season, and smooths the data points usin Seaborn to create
                                a heatmap effect. The more shots a team takes at a certain spot on the ice, the darker the shade of red is.
                            </h6>
                            <h5 className='left'>All Team Shots (Hex)</h5>
                            <img className='img-fluid' src="https://user-images.githubusercontent.com/68918006/147365563-d6903bf2-a9bb-43e8-9d57-7bc40c6a4a69.png"></img>
                            <h6>&emsp;Same as the above program, but the plot is a Matplotlib hexbin instead of a heatmap.</h6>
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
                        <Button variant="dark" onClick={() => setShowGoalDiff(true)}>Learn More</Button>
                        <Modal show={showGoalDiff} onHide={() => setShowGoalDiff(false)} size="lg">
                            <Modal.Header closeButton>
                                <Modal.Title><h5>NHL Goal Differential</h5></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h6>&emsp;This is a program written in Python that visualizes an NHL teams goal differential per game played. If they have a positive goal differential, that means they won
                                    the game and the bar will be green. If they had a negative goal differential, the team lost the game and the bar will be red. <br></br>
                                &emsp;This was written in Python and utilized an NHL Python SDK to get game data, as well as Matplotlib to plot each diffierential.<br></br>
                                &emsp;Here is an example output that shows the New York Islanders 2020-2021 season goal differential per game:
                                </h6>
                                <img className='img-fluid' src = "https://user-images.githubusercontent.com/68918006/137642521-cf2c39c2-34c6-4b5a-a126-7456975937d7.png"></img>
                            </Modal.Body>
                        </Modal>
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
