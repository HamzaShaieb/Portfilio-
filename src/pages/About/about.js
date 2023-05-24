import { Stack, Typography,Link } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';

import '../../App.css'
import Profile from '../../assetes/images/profile.png'
import { FaBeer } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';



const About = () => {
    return (
        <section style={{marginTop:'100px',height:'880',width:'100%',backgroundColor:'#0A1015',position:'relative'}} id='About'>
        <Stack style={{display:'flex',flexDirection:'column',color:'white',alignItems:'center',height:'45%',marginTop:0 ,justifyContent:'center',paddingTop:'8%'}} padding={10}  >

         <Stack style={{textAlign:'center',marginBottom:'70px'}}>
            <Typography style={{fontSize:'30px',borderBottom:'5px solid #2FF3E0'}}>About</Typography>
            <Typography style={{fontSize:'15px',marginTop:'10px',opacity:'0.4'}}>Learn more about who I am</Typography>
         </Stack>

         <Stack style={{display:'flex',flexDirection:'row-reverse',alignItems:'center',justifyContent:'center'}}>
          <Stack>
          <Typography style={{fontSize:'45px'}}>I 'm Hamza Shaieb</Typography>
            <Typography style={{fontSize:'20px',marginTop:'15px',opacity:'0.6'}}>A Fullstack Web Developper</Typography>
            <Typography style={{fontSize:'15px',marginTop:'15px',opacity:'0.4'}}>Passionate full-stack web developer with expertise in,<br/> JavaScript and a strong desire to assist others. Committed <br/> to success through a strong work ethic, motivation,<br/> and cooperative nature.</Typography>
            <Stack style={{display:'flex',flexDirection:'row',marginTop:'15px'}}>
                 <a href='https://github.com/HamzaShaieb'><FaGithub className='icones' /> </a>
              <a href='https://www.linkedin.com/in/hamza-shaieb-software-developper/'><FaLinkedin className='icones' /> </a>
                <a href='https://www.instagram.com/shaieb.hamza/'> <FaInstagram className='icones' /> </a>
               <a href='https://twitter.com/DevShaieb68571'><FaTwitter className='icones' /> </a>
            </Stack>
            
          </Stack>
          <img src={Profile} style={{width:'570px',height:'440px'}}/>
           
        </Stack>
        <button className='btn'><a href='#About' style={{}}>Download CV </a></button>
   </Stack>

</section>
    );
}

export default About;
