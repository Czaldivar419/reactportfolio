import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/media/contactImg.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();
  const [showMessageSent, setShowMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_xtz6eu8", "template_uw2s2eq", form.current, "AiGO8oL6SL_yM2GhI")
    .then((result) => {
      console.log(result.text);
      setShowMessageSent(true);
      form.current.reset();
      setTimeout(() => setShowMessageSent(false), 3000); 
  }, (error) => {
      console.log(error.text);
  });
};

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Me"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Phone Number</label>
                <input type="tel" name="phone_number" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
                {showMessageSent && <div>Message sent!</div>}
              </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact;