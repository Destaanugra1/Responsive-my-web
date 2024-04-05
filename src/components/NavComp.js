import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavComp = () => {
    const [changeColor, setChangeColor] = useState(false);

    const changeBackgroundColor = () => {
        if (window.scrollY > 680) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    };

    useEffect(() => {
        changeBackgroundColor();

        window.addEventListener("scroll", changeBackgroundColor);

        // Hapus event listener saat komponen dibongkar
        return () => {
            window.removeEventListener("scroll", changeBackgroundColor);
        };
    }, []);

    return (
        <div className="sticky-top">
            <Navbar variant="dark" expand="lg" className={changeColor ? "color-active" : ""}>
                <Container>
                    <Navbar.Brand href="#home" className="fw-bold fs-4">Ngopi</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-center">
                            <Nav.Link href="#Home" className="mx-2">Home</Nav.Link>
                            <Nav.Link href="#Galery" className="mx-2">Gallery</Nav.Link>
                            <Nav.Link href="#Service" className="mx-2">Service</Nav.Link>
                            <Nav.Link href="#faq" className="mx-2">Faq</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavComp;
