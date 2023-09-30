
import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { FaDesktop, FaServer, FaTools } from 'react-icons/fa';
import TrackVisibility from 'react-on-screen';




export const Skills = () => {
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
              Learn how I can help your business

              </p>
            </div>
          </div>
        </div>
        <TrackVisibility> 
        
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <Card className="skill-card">
              <Card.Body >
                <Card.Title className='title-card'>  Frontend Development</Card.Title>
                <Card.Text className='text-card'>
                Html,Css,bootstrap,tailwins,<br/>,javascript.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6">
            <Card className="skill-card">
              <Card.Body>
                <Card.Title className='title-card'>Backend Development</Card.Title>
                <Card.Text className='text-card' >
                  node js , express js, next js ,<br/> sql , mongodb
                </Card.Text>  
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6">
            <Card className="skill-card">
              <Card.Body>
                <Card.Title className='title-card'>Tools & Technologies</Card.Title>
                <Card.Text className='text-card'>
                  git,doker,unit test
                </Card.Text>

              </Card.Body>
            </Card>
          </div>
        </div>
        </TrackVisibility>
        </div>
       
    </section>
  )
}
