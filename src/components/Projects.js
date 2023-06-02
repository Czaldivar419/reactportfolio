import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import project1 from "../assets/media/project1.jpg";
import project2 from "../assets/media/project2.jpg";
import project3 from "../assets/media/project3.png";
import colorSharp2 from "../assets/media/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {
    const projects = [
        {
            title: "Rialto Flooring",
            description: "Front End Development",
            imgUrl: project1,
            href: "https://rialtoflooring.herokuapp.com/"
        },
        {
            title: "Employee Management System",
            description: "NodeJS",
            imgUrl: project2,
            href: "https://github.com/Czaldivar419/Challenge10-Employee-Management-System"
        },
        {
            title: "React Portfolio",
            description: "Front End Development",
            imgUrl: project3,
            href: "https://christianportfolio.herokuapp.com/"
        },
    ];

    return (
        <section className="project" id="project">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p>Explore a selection of my completed individual projects below. 
                      Each project showcases a different aspect of my expertise and creativity in web development.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2} alt="colorbg"></img>
        </section>
      )
    }
    
    export default Projects;