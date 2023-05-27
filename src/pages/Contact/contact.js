import React from 'react';
import { Radio,FormControlLabel,Button,TextField,FormControl,FormLabel,RadioGroup,handleSubmit,Typography,Stack } from '@mui/material';


const Contact = () => {
    return (
        <section style={{marginTop:'10px',height:'888px',width:'100%',backgroundColor:'#0A1015',position:'relative',fontFamily:'Roboto' }} id='Home'>
        <Stack style={{display:'flex',flexDirection:'column',color:'white',alignItems:'center',height:'45%',marginTop:0 ,justifyContent:'center',paddingTop:'8%'}}>
        <Stack style={{textAlign:'center',marginBottom:'70px'}}>
            <Typography style={{fontSize:'30px',borderBottom:'5px solid #2FF3E0'}}>Contact</Typography>
            <Typography style={{fontSize:'15px',marginTop:'10px',opacity:'0.4'}}>Let get en touch</Typography>
        </Stack>
            <form style={{height:'1080px',width:'70%',padding:'30px 30px 30px 30px'}}> 
                
                <Stack style={{display:'flex',flexDirection:'row'}}>
                    <label style={{marginRight:'30%',width:'30%',height:'200px',fontSize:'30px'}}>
                        Name:
                        <input type='text' style={{width:'500px',height:'30%',padding:'10px 20px 10px 20px',fontSize:'20px',backgroundColor:'#171c22',color:'white',zIndex:'130'}}  />
                    </label>
                    <label style={{marginRight:'30%',width:'30%',height:'200px',fontSize:'30px'}}>
                        Phone:
                        <input type='text' style={{width:'500px',height:'30%',padding:'10px 20px 10px 20px',fontSize:'20px',backgroundColor:'#171c22',color:'white',zIndex:'130'}}  />
                    </label>
                    

                </Stack>
                <label style={{width:'98%',height:'200px',fontSize:'30px',marginTop:'0'}}>
                        Email:
                        <input type='email' style={{width:'100%',height:'30%',backgroundColor:'#171c22',color:'white'}} />
                </label>
                <label style={{width:'98%',height:'200px',fontSize:'30px',marginTop:'0', }}>
                          Message<br/>
                        <textarea type='text' style={{width:'100%',height:'70%',padding:'10px 20px 10px 20px',fontSize:'20px',backgroundColor:'#171c22',color:'white',zIndex:'130'}} />
                </label>
                
            </form>
            <button className='btn'><a href='#About' style={{}}>Download CV </a></button>
         </Stack>
        </section>
 
    );
}

export default Contact;
