import React from "react";
import { Container, Row, Col } from "react-bootstrap"

const ServiceComp = () => {
    return (
        <div className="service main-vh-100 d-flex align-items-center" id="Service">
            <Container>
                <Row className="mb-5">
                    <Col>
                        <h1 className="text-center fw-bold " data-aos="fade-up">Service</h1>
                        <p className="text-center" data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Col>
                </Row>
                <Row className="row-cols-lg-4 row-cols-md-2 justify-content-center">
                    <Col data-aos="fade-up" className="text-center py-5 px-3">
                        <i class="bi bi-coin mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">
                            <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                        </svg></i>
                        <h5 className="fw-bold">Haraga terjangkau</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </Col>
                    <Col data-aos="fade-up" data-aos-delay="200" className="text-center  py-5 px-3">
                        <i class="bi bi-coin mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg></i>
                        <h5 className="fw-bold">Terjamin bagus</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </Col>
                    <Col data-aos="fade-up" data-aos-delay="400" className="text-center  py-5 px-3">
                        <i class="bi bi-coin mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-shield" viewBox="0 0 16 16">
                            <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                        </svg></i>
                        <h5 className="fw-bold">Keamanan Terjamin</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ServiceComp;