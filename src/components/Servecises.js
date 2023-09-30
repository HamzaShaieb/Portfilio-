
import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { FaDesktop, FaServer, FaTools } from 'react-icons/fa';




export const Servecises = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    <section className="skill" id="skills">
        <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h2>Skills</h2>
              <p>
                Showcase your amazing skills in various areas of expertise.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <Card className="skill-card">
              <Card.Body>
                <Card.Title>Frontend Development</Card.Title>
                <Card.Text>
                  Develop stunning user interfaces using modern frontend technologies.
                </Card.Text>
                <FaDesktop className="skill-icon" />
              </Card.Body>
              <Button variant="primary">Learn More</Button>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6">
            <Card className="skill-card">
              <Card.Body>
                <Card.Title>Backend Development</Card.Title>
                <Card.Text>
                  Build robust server-side applications and APIs to power your projects.
                </Card.Text>
                <FaServer className="skill-icon" />
              </Card.Body>
              <Button variant="primary">Learn More</Button>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6">
            <Card className="skill-card">
              <Card.Body>
                <Card.Title>Tools & Technologies</Card.Title>
                <Card.Text>
                  Utilize a wide range of tools and technologies to enhance your workflow.
                </Card.Text>
                <FaTools className="skill-icon" />
              </Card.Body>
              <Button variant="primary">Learn More</Button>
            </Card>
          </div>
        </div>
        </div>
       s
    </section>
  )
}
