import { Card, Col } from "react-bootstrap";
import { FaEye, FaGithub } from 'react-icons/fa';
import { AiOutlineFileText } from 'react-icons/ai';
import { useState } from "react";

export const ProjectCard = ({ title, description, imgUrl }) => {
  const [show_Project,setshow_Project] =useState(false)
  return (
    <> 
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <div className="links">
      <a href="https://example.com" style={{color:'white',fontSize:'200%',marginRight:'10px'}} >
        <FaEye /> {/* Renders the Eye icon */}
      </a>  
      <a href="https://github.com" style={{color:'white',fontSize:'200%',marginRight:'10px'}}>
        <FaGithub /> {/* Renders the GitHub icon */}
      </a>
      <a style={{color:'white',fontSize:'200%',marginRight:'10px'}} >
        <AiOutlineFileText onClick={()=>{setshow_Project(true)}} /> {/* Renders the Description icon */}
      </a>
    </div>
        </div>
      </div>
    </Col>
    <div className={show_Project ? 'projectshow' : 'd-none'}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Card className="text-center">
            <Card.Img variant="top" src="your-image-url.jpg" alt="Card Image" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some example text.</Card.Text>
            </Card.Body>
            <Card.Footer>
              <i className="fas fa-heart"></i>
              <i className="fas fa-comment"></i>
              <i className="fas fa-share"></i>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
