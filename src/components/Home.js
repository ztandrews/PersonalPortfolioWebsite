import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
export default class Home extends Component {
    render() {
        return (
            <div className="container2">
                <h1 className="page-header">Home</h1>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEp9Y3FX-3o1w/profile-displayphoto-shrink_800_800/0/1631640775932?e=1646870400&v=beta&t=ZN-LIe_2yz5abfGVfZzS-ARW9A8eMYQNbstVYBQwwjY" className="profile-picture"></img>
                <h3>Hello, I'm Zach Andrews.</h3>
                <h2 className='subtitle'>Skills</h2>
                <h3>Languages</h3>
                <div className='container3'>
                    <Row>
                        <Col>
                            <OverlayTrigger overlay={<Tooltip>Python</Tooltip>}>
                                <img className='icons' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"></img>
                            </OverlayTrigger>
                        </Col>
                        <Col>
                            <OverlayTrigger overlay={<Tooltip>Java</Tooltip>}>
                                <img className='icons' src="https://www.blockachain.gr/wp-content/uploads/2018/03/java-coffee-cup-logo.png"></img>
                            </OverlayTrigger>
                        </Col>
                        <Col>
                            <OverlayTrigger overlay={<Tooltip>JavaScript</Tooltip>}>
                                <img className='icons' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"></img>
                            </OverlayTrigger>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <OverlayTrigger overlay={<Tooltip>PHP</Tooltip>}>
                                <img className='icons' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"></img>
                            </OverlayTrigger>
                        </Col>
                        <Col>
                            <OverlayTrigger overlay={<Tooltip>HTML/CSS</Tooltip>}>
                                <img className='icons' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/2560px-CSS3_and_HTML5_logos_and_wordmarks.svg.png"></img>
                            </OverlayTrigger>
                        </Col>
                        <Col>
                            <OverlayTrigger overlay={<Tooltip>SQL</Tooltip>}>
                                <img className='icons' src="https://camo.githubusercontent.com/24da6e8c29a316376cf2ce0b82e61a18f6ef96e1b38e44f76536eaee8c14d6a2/68747470733a2f2f6c6f676f6469782e636f6d2f6c6f676f2f313332373231352e706e67"></img>
                            </OverlayTrigger>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <OverlayTrigger overlay={<Tooltip>R</Tooltip>}>
                                <img className='icons' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/r/r.png"></img>
                            </OverlayTrigger>
                        </Col>
                        <Col>
                            <OverlayTrigger overlay={<Tooltip>Perl</Tooltip>}>
                                <img className='icons' src="https://img.stackshare.io/service/1048/perl.png"></img>
                            </OverlayTrigger>
                        </Col>

                        <Col>
                            <OverlayTrigger overlay={<Tooltip>C++</Tooltip>}>
                                <img className='icons' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"></img>
                            </OverlayTrigger>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <OverlayTrigger overlay={<Tooltip>Bash</Tooltip>}>
                                <img className='icons' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/1200px-Bash_Logo_Colored.svg.png"></img>
                            </OverlayTrigger>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </div>
                <br></br>
                <h3>Frameworks</h3>
                <div className='container3'>
                    <Row>
                        <Col>
                            <OverlayTrigger overlay={<Tooltip>React</Tooltip>}>
                                <img className='icons' src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"></img>
                            </OverlayTrigger>
                        </Col>
                        <Col>
                            <OverlayTrigger overlay={<Tooltip>Angular</Tooltip>}>
                                <img className='icons' src="https://camo.githubusercontent.com/66250619876d623eb603398f2f52ed2187bd1e73077b8500484917e362c5ea6f/68747470733a2f2f616e67756c61722e696f2f6173736574732f696d616765732f6c6f676f732f616e67756c61726a732f416e67756c61724a532d536869656c642e737667"></img>
                            </OverlayTrigger>
                        </Col>
                        <Col></Col>
                    </Row>
                </div>
                <br></br>
                <h3>Operating Systems</h3>
                <div className='container3'>
                    <Row>
                        <Col>
                            <OverlayTrigger overlay={<Tooltip>Windows</Tooltip>}>
                                <img className='icons' src="https://camo.githubusercontent.com/71fd925cfae32d01f12201ada439afa5965987d22766bfbc1cb707a07be774a8/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f352f35662f57696e646f77735f6c6f676f5f2d5f323031322e7376672f3230343870782d57696e646f77735f6c6f676f5f2d5f323031322e7376672e706e67"></img>
                            </OverlayTrigger>
                        </Col>
                        <Col>
                            <OverlayTrigger overlay={<Tooltip>Ubuntu</Tooltip>}>
                                <img className='icons' src="https://camo.githubusercontent.com/c605f22eb35be472a9e739b4f82fa9b0a522fc02af1df6c39e5559a76450d5b4/68747470733a2f2f6173736574732e7562756e74752e636f6d2f76312f32393938356139382d7562756e74752d6c6f676f33322e706e67"></img>
                            </OverlayTrigger>
                        </Col>
                        <Col>
                            <OverlayTrigger overlay={<Tooltip>Oracle Solaris</Tooltip>}>
                                <img className='icons' src="https://camo.githubusercontent.com/0c4284605922c7427828dcfd7928f61e0e91c03e2636aed2075c94488c308956/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f652f65652f416b7475616c6e655f6c6f676f5f4f7261636c655f536f6c617269735f4f535f4f536f732e706e672f32353070782d416b7475616c6e655f6c6f676f5f4f7261636c655f536f6c617269735f4f535f4f536f732e706e67"></img>
                            </OverlayTrigger>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <OverlayTrigger overlay={<Tooltip>Mac OS</Tooltip>}>
                                <img className='icons' src="https://www.kindpng.com/picc/m/172-1724310_mac-os-logo-png-transparent-png.png"></img>
                            </OverlayTrigger>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </div>
                <br></br>
                <h3>Other</h3>
                <div className='container3'>
                    <Row>
                        <Col>
                            <OverlayTrigger overlay={<Tooltip>AWS</Tooltip>}>
                                <img className='icons' src="https://camo.githubusercontent.com/f399ded33ac9b34a09ebaec2f0432c45bcbcfaaa7b543a899152cae263d28154/687474703a2f2f7465636874616c656e742e63612f77702d636f6e74656e742f75706c6f6164732f323032302f31322f315f625f616c37433570323674625a473473792d435771772e706e67"></img>
                            </OverlayTrigger>
                        </Col>
                        <Col>
                            <OverlayTrigger overlay={<Tooltip>Splunk</Tooltip>}>
                                <img className='icons' src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Splunk-Logo.jpg"></img>
                            </OverlayTrigger>
                        </Col>
                    
                        <Col>
                            <OverlayTrigger overlay={<Tooltip>Raspberry Pi</Tooltip>}>
                                <img className='icons' src="https://camo.githubusercontent.com/9a74d66a0ad783f2d2fc9119a746a6be92a9c2c57c64537bd82eb89d102202f5/68747470733a2f2f7777772e72617370626572727970692e6f72672f6170702f75706c6f6164732f323031382f30332f5250692d4c6f676f2d5265672d53435245454e2e706e67"></img>
                            </OverlayTrigger>
                        </Col>
                        </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <OverlayTrigger overlay={<Tooltip>Git</Tooltip>}>
                                <img className='icons' src="https://camo.githubusercontent.com/b8ee9fd2e9b26a7265ece6dbc6f5c7449928b84f45a08fe5852d6a8dfd915fb3/68747470733a2f2f6769742d73636d2e636f6d2f696d616765732f6c6f676f732f646f776e6c6f6164732f4769742d49636f6e2d31373838432e706e67"></img>
                            </OverlayTrigger>
                        </Col>
                        <Col>
                            <OverlayTrigger overlay={<Tooltip>PowerApps</Tooltip>}>
                                <img className='icons' src="https://powerapps.microsoft.com/images/shared/social/social-default-image.png"></img>
                            </OverlayTrigger>
                        </Col>
                        <Col>
                            <OverlayTrigger overlay={<Tooltip>MongoDB</Tooltip>}>
                                <img className='icons' src="https://g.foolcdn.com/art/companylogos/square/mdb.png"></img>
                            </OverlayTrigger>
                        </Col>
                    </Row>
                </div>
                <br></br>
                <h2 className='subtitle'>Experience</h2>
                <Card>
                    <Card.Img className='card-images' variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Fiserv_logo.svg/2560px-Fiserv_logo.svg.png" />
                    <Card.Body>
                        <Card.Title className='card-font' >Fiserv</Card.Title>
                        <Card.Text className='card-font' >
                            Software Engineer Intern: Summer 2021
                        </Card.Text>
                        <div class="col text-center">
                            <Button variant="dark">Learn More</Button>
                        </div>
                    </Card.Body>
                </Card>
                <br></br>
                <Card>
                    <Card.Img className='card-images' variant="top" src="https://denellelaw.com/wp-content/uploads/sites/120/2021/03/catic_logo.png" />
                    <Card.Body>
                        <Card.Title className='card-font' >CATIC</Card.Title>
                        <Card.Text className='card-font' >
                            Data Entry Clerk: Summer 2018 - Winter 2018
                        </Card.Text>
                        <div class="col text-center">
                            <Button variant="dark">Learn More</Button>
                        </div>
                    </Card.Body>
                </Card>
                <h2 className='subtitle'>Education</h2>
                <Card>
                    <Card.Img className='card-images' variant="top" src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/monmouth_u/standard.png?1580176224" />

                    <Card.Body>
                        <Card.Title className='card-font' >Monmouth University</Card.Title>
                        <Card.Text className='card-font' >
                            2023
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
