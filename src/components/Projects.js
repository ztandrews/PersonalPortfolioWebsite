import React, { Component, useState } from 'react'
import { Container, Row, Col, Card, Button, OverlayTrigger, Tooltip, Modal } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';


const Project = () => {
    const [showShotMaps, setShowShotMaps] = useState(false);
    const [showGoalDiff, setShowGoalDiff] = useState(false);
    const [showPolar, setShowPolar] = useState(false);
    const [showSleeper, setShowSleeper] = useState(false);
    const [showWWJD, setShowWWJD] = useState(false);
    const [showLC, setShowLC] = useState(false);
    return (
        <div className='container'>
            <h1 className="page-header">Projects</h1>
             <Row xs={1} md={2} className="g-4">
            <Col>
            <Card className='mx-auto h-100 shadow p-3 mb-5 bg-white rounded'>
                <Card.Img className='card-images' variant="top" src="./rink.png" />
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
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ztandrews/NHLShotCharts">
                                        <img className='card-icons' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img>
                                    </a>
                                    <h6>&emsp;These programs are all written in Python and work with NHL shot location data from the <a target="_blank" rel="noopener noreferrer" href="https://gitlab.com/dword4/nhlapi">"Unofficial" NHL API</a>. Each program serves it's own purpose (listed below) but they are
                                        all generally the same in that they are visualizing NHL shot data, either from a certain  team or a certain game. I used these programs as a way to learn more about data visualization,
                                        and more speciffially how to make nice-looking charts using tools like Matplotlib and Seaborn. I also took advantage of an extremly useful Python library called <a target="_blank" rel="noopener noreferrer" href="https://pythonrepo.com/repo/the-bucketless-hockey_rink">hockey_rink</a>
                                        which allowed me to use a pre-drawn, NHL scaled rink to plot the data. Listed below are the programs, their uses, and example outputs.
                                    </h6>
                                    <h5 className='left'>Single Game Shots</h5>
                                    <img className="img-fluid" src="https://user-images.githubusercontent.com/68918006/147365443-03a3921e-cc6d-416f-b179-0806c7c08ffd.png"></img>
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
            </Col>
            <Col>
            <Card className='mx-auto h-100 shadow p-3 mb-5 bg-white rounded'>
                <Card.Img className='card-images' variant="top" src="./diff.png" />
                <Card.Body>
                    <Card.Title className='card-font' >NHL Goal Differential</Card.Title>
                    <Card.Text className='card-font' >
                        A program to chart NHL teams goal differentials.
                    </Card.Text>
                    <div className="col text-center">
                        <Button variant="dark" onClick={() => setShowGoalDiff(true)}>Learn More</Button>
                        <Modal show={showGoalDiff} onHide={() => setShowGoalDiff(false)} size="lg">
                            <Modal.Header closeButton>
                                <Modal.Title><h5>NHL Goal Differential</h5></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className='container'>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ztandrews/NHLGoalDifferential">
                                        <img className='card-icons' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img>
                                    </a>
                                    <h6>&emsp;This is a program written in Python that visualizes an NHL teams goal differential per game played. If they have a positive goal differential, that means they won
                                        the game and the bar will be green. If they had a negative goal differential, the team lost the game and the bar will be red. This was one of my
                                        first programs I made to experiment with data visualization, so it's main purpose was to re-create the goal differential charts
                                        that appear on Hockey-Reference team pages.<br></br>
                                        &emsp;This was written in Python and utilized an <a target="_blank" rel="noopener noreferrer" href="https://sportsipy.readthedocs.io/en/latest/nhl.html#sportsipy.nhl.boxscore.BoxscorePlayer.on_ice_shot_attempts_against">NHL Python Package</a> to get game data, as well as Matplotlib to plot each diffierential.<br></br>
                                        &emsp;Here is an example output that shows the New York Islanders 2020-2021 season goal differential per game:
                                    </h6>
                                    <img className='img-fluid' src="https://user-images.githubusercontent.com/68918006/137642521-cf2c39c2-34c6-4b5a-a126-7456975937d7.png"></img>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            <br></br>
           <Row xs={1} md={2} className="g-4">
               <Col>
            <Card className='mx-auto h-100 shadow p-3 mb-5 bg-white rounded'>
                <Card.Img className='card-images' variant="top" src="./charts.png" />
                <Card.Body>
                    <Card.Title className='card-font' >MLB Polar Charts</Card.Title>
                    <Card.Text className='card-font' >
                        Programs to chart MLB players' stats.
                    </Card.Text>
                    <div className="col text-center">
                        <Button variant="dark" onClick={() => setShowPolar(true)}>Learn More</Button>
                        <Modal show={showPolar} onHide={() => setShowPolar(false)} size="lg">
                            <Modal.Header closeButton>
                                <Modal.Title><h5>MLB Polar Charts</h5></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className='container'>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ztandrews/MLBHitterZScore">
                                        <img className='card-icons' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img>
                                    </a>
                                    <h6>&emsp;This is a Python project that plots MLB hitters and pitchers stats on a polar chart, relative to league average for each
                                        category. The purpose of this program was to create a one-stop-shop visualization for an MLB player that tells you *most* of the story of
                                        how they are performing in a given year. By charting players Z-Scores for important statistics, we can see how they are performing
                                        in each category relative to league average qualified players.<br></br>
                                        &emsp;This program was written in Python and the data is from baseball savant. I utilized Pandas to work with the data in an easy way, and Matplotlib to chart
                                        the given player's Z-Scores for each statistic. Below are two example outputs from the programs.
                                    </h6>
                                    <h5 className='left'>A Good Hitter, Visualized</h5>
                                    <img className='img-fluid' src="https://user-images.githubusercontent.com/68918006/114966410-7d2b0900-9e40-11eb-84df-f44418d7dffd.png"></img>
                                    <h5 className='left'>A Bad Hitter, Visualized</h5>
                                    <img className='img-fluid' src="https://user-images.githubusercontent.com/68918006/114966460-97fd7d80-9e40-11eb-9ba2-f2c366ebe1d6.png"></img>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                </Card.Body>
            </Card>
           </Col>
           <Col>
            <Card className='mx-auto h-100 shadow p-3 mb-5 bg-white rounded'>
                <Card.Img className='card-images' variant="top" src="./charts2.png" />
                <Card.Body>
                    <Card.Title className='card-font' >Sleeper Points Above Expected</Card.Title>
                    <Card.Text className='card-font' >
                        A program to chart fantasy points above expected.
                    </Card.Text>
                    <div className="col text-center">
                        <Button variant="dark" onClick={() => setShowSleeper(true)}>Learn More</Button>
                        <Modal show={showSleeper} onHide={() => setShowSleeper(false)} size="lg">
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    <h5>Sleeper Points Above Expected</h5>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className='container'>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/ztandrews/SleeperPointsAboveExpected">
                                        <img className='card-icons' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img>
                                    </a>
                                    <h6>&emsp;This Python program is for seeing how well, or poorly, a Sleeper fantasy football team's players are playing compared
                                        to Sleepers projections. During the fantasy football season, I found myself curious to see if my team was underperforming, or if I was just really bad
                                        at drafting. This program visualizes the answer to that question.<br></br>
                                        &emsp;This program was made using Python, with the data being collected from the unofficial Sleeper API. I used Matplotlib to visualize the difference in actual PPR points
                                        and expected PPR points, and was able to see just how much my team was underperforming. An example output is below.
                                    </h6>
                                    <img className='img-fluid' src="https://user-images.githubusercontent.com/68918006/142657452-f41ae6a1-ea78-413e-a0e2-503e75883884.png"></img>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            <br></br>
            <Row xs={1} md={2} className="g-4">
                <Col>
            <Card className='mx-auto h-100 shadow p-3 mb-5 bg-white rounded'>
                <Card.Img className='card-images' variant="top" src="./wwjd.jpg" />
                <Card.Body>
                    <Card.Title className='card-font' >Fantasy Football Team Website</Card.Title>
                    <Card.Text className='card-font' >
                        A React website for my fantasy football team.
                    </Card.Text>
                    <div className="col text-center">
                        <Button variant="dark" variant="dark" onClick={() => setShowWWJD(true)}>Learn More</Button>
                        <Modal show={showWWJD} onHide={() => setShowWWJD(false)} size="lg">
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    <h5>Fantasy Football Team Website</h5>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className='container'>
                                    <h6>
                                        &emsp;This project was my first full-stack React application. After weeks of learning React, I decided the best way
                                        for me to fully grasp all of the concepts was to build out a fully functional application, and decided I could make it
                                        fun by creating a website for my dynasty fantasy football team. The website includes an auto-refreshing scoreboard for the current
                                        week, an articles section where I write some articles about the team, and an auto-updating roster section.<br></br>
                                        &emsp;This proect was built with a React front-end Firebase for storage and hosting. Firebase offered me
                                        a free, easy to use system that I decided would be the best for the app. I used Python and the Sleeper API to create
                                        "batch" processes to populate the Firebase databases, which the React application then reads and presents the
                                        data. Below are a few screenshots of the website.
                                    </h6>
                                    <h5 className='left'>Home Page</h5>
                                    <img className='img-fluid' src="./wwjd6.jpg"></img>
                                    <h5 className='left'>Social Page</h5>
                                    <img className='img-fluid' src="./wjd2.jpg"></img>
                                    <h5 className='left'>Roster Page</h5>
                                    <img className='img-fluid' src="./wwjd3.jpg"></img>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                </Card.Body>
            </Card>
            </Col>
            <Col>
        <Card className='mx-auto h-100 shadow p-3 mb-5 bg-white rounded'>
                <Card.Img className='card-images' variant="top" src="./lc.jpg" />
                <Card.Body>
                    <Card.Title className='card-font' >LouCoin Website</Card.Title>
                    <Card.Text className='card-font' >
                        Islanders website that tracks a fake cryptocurrency.
                    </Card.Text>
                    <div className="col text-center">
                        <Button variant="dark" variant="dark" onClick={() => setShowLC(true)}>Learn More</Button>
                        <Modal show={showLC} onHide={() => setShowLC(false)} size="lg">
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    <h5>LouCoin Website</h5>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className='container'>
                                    <h6>&emsp;This project is the first website I ever created, with a bit of a funny backstory. Some friends of mine, who are Islanders fans like me,
                                        created a fake cryptocurrency that Islanders players "mined" by hitting the other other team during their games. I built this 
                                        website to display a leaderboard that shows how many "LouCoin" each Islanders player has mined in the current season.<br></br>
                                        &emsp;This project was my introduction to web development. It was built on plain HTML/CSS with a Python program that 
                                        calculated each players LouCoin amount (their total hits * current value of LouCoin) and uploaded them a Firebase Real Time database, which the
                                        website then reads in and displays. While this project is very niche and pretty much uselss to the everday person,
                                        it gave me a full, hands on experience on how to build, host, and maintain a website, along with how to acquire a 
                                        domain name and SSL certificate to make sure the site is secure. Below is a picture of what the site looks like.
                                    </h6>
                                    <img className='img-fluid' src="./lc2.jpg"></img>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                </Card.Body>
            </Card>
            </Col>
            </Row>
        </div>
    )
}

export default Project;
