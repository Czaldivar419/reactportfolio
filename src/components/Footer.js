import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <h1 className="footer-logo">CHRIS</h1>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                        <a href="https://www.instagram.com/chrissychris98/?hl=en"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/christian-zaldivar-b5b61926a/"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/Czaldivar419"><i class="fa-brands fa-github"></i></a>
                        </div>
                        <p className="footer-p">Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;