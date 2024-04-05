import React from "react";
import {Container, Row, Col} from "react-bootstrap"
import Galery1 from "../assets/img/gallery/gallery-1.jpg"
import Galery2 from "../assets/img/gallery/gallery-2.jpg"
import Galery3 from "../assets/img/gallery/gallery-3.jpg"
import Galery4 from "../assets/img/gallery/gallery-4.jpg"
import Galery5 from "../assets/img/gallery/gallery-5.jpg"
import Galery6 from "../assets/img/gallery/gallery-6.jpg"

const GaleryComp = () => {
    return (
        <div className="hero2 gallery min-vh-100 d-flex align-center" >
            <Container>
                <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4">
                    <Col id="Galery" data-aos="fade-up">
                    <img src={Galery1} alt="unsplas.com" className="w-100" />
                    </Col>
                    <Col data-aos="fade-up" data-aos-delay="200">
                    <img src={Galery2} alt="unsplas.com" className="w-100"  />
                    </Col>
                    <Col data-aos="fade-up" data-aos-delay="400">
                    <img src={Galery3} alt="unsplas.com" className="w-100"  />
                    </Col>
                    <Col data-aos="fade-up" data-aos-delay="600">
                    <img src={Galery4} alt="unsplas.com" className="w-100"  />
                    </Col>
                    <Col data-aos="fade-up" data-aos-delay="800">
                    <img src={Galery5} alt="unsplas.com" className="w-100"  />
                    </Col>
                    <Col data-aos="fade-up" data-aos-delay="1000">
                    <img src={Galery6} alt="unsplas.com" className="w-100"  />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GaleryComp;