import { Container, Row, Col } from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from "../assets/media/headerImg.png"
import { HashLink } from 'react-router-hash-link';

import { useState, useEffect } from "react"


const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ " Web Developer", " UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] =  useState(300-Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
    }, delta )

    return () => { clearInterval (ticker)};
    }, [text])

    const tick = () => {
        let i =loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setDelta(500);
            }
    };

    const handleConnectClick = () => {
        const targetElement = document.getElementById('connect');
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{"Hi, I'm Christian"}<span className="wrap">{text}</span></h1>
                        <p>I am a Full Stack Developer with a strong passion for creating efficient and innovative web applications. 
                            With expertise in both front and back end technologies,
                            I am dedicated to continuously learning and staying updated with the latest industry trends. 
                            Let's work together to bring your projects to life.</p>
                            <button onClick={handleConnectClick}>
                                Let's connect <ArrowRightCircle size={25} />
                            </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Banner Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;