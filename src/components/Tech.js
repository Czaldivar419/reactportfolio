import { Container, Row, Col } from "react-bootstrap";

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import MERN from "../assets/media/MERN.png";
import DB from "../assets/media/database1.png";
import brand from "../assets/media/test.png";
import SEO from "../assets/media/SEO.png";
import UIUX from "../assets/media/UI.png";
import FE from "../assets/media/fe.jpg";
import BE from "../assets/media/backend.png";


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
                        <p>Once again this is just some dummy text that I'm writing just for show.<br></br>I'll be changing this once I am done with the site layout.</p>
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