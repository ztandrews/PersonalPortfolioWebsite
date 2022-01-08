import React from 'react'
import { Container, Row, Col, Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
function Footer() {
    return (
        <div className='main-footer'>
            <hr></hr>
            <p>2022 Zach Andrews</p>
           <div className='container4'>
                           <Row>
            <Col>
            <img className='footer-icons' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img>
            </Col>
            <Col>
            <img className='footer-icons' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"></img>
            </Col>
            <Col>
            <img className='footer-icons' src="https://camo.githubusercontent.com/f8eb908793629e627b62fe256f3ca88e6e47f24c4b252e94ad3d0e03be0a3663/68747470733a2f2f63646e342e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f736f6369616c2d6d656469612d6c6f676f732d362f3531322f3131322d676d61696c5f656d61696c5f6d61696c2d3531322e706e67"></img>
            </Col>
             </Row>
             </div>
        </div>
    )
}

export default Footer
