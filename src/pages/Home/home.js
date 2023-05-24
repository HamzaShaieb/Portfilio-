import { Container, Typography ,Button, Stack ,Link } from '@mui/material';
import React from 'react';
import '../../App.css'
const Home = () => {
    return (
    <section style={{marginTop:'10px',height:'888px',width:'100%',backgroundColor:'#0A1015',position:'relative',fontFamily:'Roboto' }} id='Home'>
            <Stack style={{display:'flex',flexDirection:'column',color:'white',alignItems:'center',height:'45%',marginTop:0 ,justifyContent:'center',paddingTop:'30%'}} padding={10}>
                <Typography style={{fontSize:'35px',opacity:'0.4', }}>Full Stack Web Developper</Typography>
                <Typography style={{fontSize:'130px',fontWeight:'bold'}}>Hamza Shaieb</Typography>
                <Typography style={{fontSize:'20px',textAlign:'center',opacity:'0.4'}}> I’m a developer based in Tunisia, AU specializing in building elegant<br/> and performing web applications. </Typography>
                
            <button className='btn'><a href='#About' style={{}}>About Me </a></button>
        </Stack>

    </section>
 
    );
}

export default Home;
