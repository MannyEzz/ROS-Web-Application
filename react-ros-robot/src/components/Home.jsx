import React, { Component } from 'react';
import Connection from './Connection';
import Teleoperation from './Teleoperation';
import {Row, Col, Container} from "react-bootstrap";
import RobotState from './RobotState';
import Map from "./Map";
class Home extends Component {
    state ={};
    
    render() {
        return (
            <div>
                <Container>
                    <h1 className="text-center mt-3">Robot Control Page</h1>

                    <Row>
                        <Col>
                        <Connection/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Teleoperation/>
                        <RobotState/>
                        </Col>
                        <Col>
                        <h1>Map</h1>
                        <Map></Map>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;
