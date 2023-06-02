import { Container, Row, Col } from "react-bootstrap";

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import MERN from "../assets/media/tech6.png";
import DB from "../assets/media/tech5.jpg";
import brand from "../assets/media/tech4.jpg";
import SEO from "../assets/media/tech1.webp";
import UIUX from "../assets/media/tech2.jpg";
import FE from "../assets/media/tech7.jpg";
import BE from "../assets/media/tech3.webp";


const Tech = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className="tech" id="tech">
            <Container>
                <Row>
                    <Col>
                    <div className="tech-bx">
                        <h2>
                            My Tech Stack
                        </h2>
                        <p>As a Full Stack Developer, I am well versed in the necessary languages, frameworks, and skills required to create beautiful and responsive web applications.</p>
                        <Carousel responsive={responsive} infinite={true} className="tech-slider">
                            <div className="item">
                                <img src={MERN} alt="MERN" />
                                <h5>MERN Stack</h5>
                            </div>
                            <div className="item">
                                <img src={DB} alt="Database" />
                                <h5>Database Management</h5>
                            </div>
                            <div className="item">
                                <img src={brand} alt="Brand" />
                                <h5>Brand Creation</h5>
                            </div>
                            <div className="item">
                                <img src={SEO} alt="SEO" />
                                <h5>Search Engine Optimization</h5>
                            </div>
                            <div className="item">
                                <img src={UIUX} alt="UI/UX" />
                                <h5>UI/UX Design</h5>
                            </div>
                            <div className="item">
                                <img src={FE} alt="Frontend" />
                                <h5>Front End Design</h5>
                            </div>
                            <div className="item">
                                <img src={BE} alt="Backend" />
                                <h5>Back End Design</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Tech;