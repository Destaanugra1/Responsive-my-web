import React from "react";
import {Container, Row, Col} from "react-bootstrap"

const HeroComp = () => {
    return (
        <div className="hero min-vh-100 w-100" id="Home">
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-white text-center fs-1 animate__animated animate__bounce animate__fadeInUp">Santai sejenak</h1>
                        <p className="text-white text-center text-white-50 animate__animated animate__bounce animate__fadeInUp animate__delay-1s">Lorem ipsum dolor sit amet consttecture adipisicing </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeroComp;