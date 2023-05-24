import React from 'react';
import { Stack, Typography,Link } from '@mui/material';


import '../../App.css'
import { FaDesktop, FaServer } from 'react-icons/fa';
import { AiOutlineTool } from 'react-icons/ai';


const Skills = () => {
    return (
        <section style={{marginTop:'100px',height:'880',width:'100%',backgroundColor:'#0A1015',position:'relative'}} id='Skills'>
        <Stack style={{display:'flex',flexDirection:'column',color:'white',alignItems:'center',height:'45%',marginTop:0 ,justifyContent:'center',paddingTop:'8%'}} padding={10}  >

         <Stack style={{textAlign:'center',marginBottom:'70px'}}>
            <Typography style={{fontSize:'30px',borderBottom:'5px solid #2FF3E0'}}>Skills</Typography>
            <Typography style={{fontSize:'15px',marginTop:'10px',opacity:'0.4'}}>Learn  how I can help your business</Typography>
         </Stack>

         <Stack style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}} >
            <Stack style={{height:'400px',width:'300px',marginLeft:'0px',display:'flex',alignContent:'center',alignItems:'center',}}>
               <Stack mb={10} style={{display:'flex',alignItems:'center',paddingTop:'10px'}}>
               <FaDesktop fontSize={100} color='#2FF3E0'/>
               <Typography fontSize={20}>Front End</Typography>

               </Stack>
               <Stack>
               <Typography>Html</Typography>
               <Typography>CSS</Typography>
               <Typography>Taillwines</Typography>
               <Typography>Materielle Ui</Typography>
               <Typography>Saas</Typography>
               <Typography>Javascript</Typography>


                  
               </Stack>
                 
            </Stack>
            <Stack style={{height:'400px',width:'300px',marginLeft:'0px',borderRight:'10px solid #2FF3E0',borderLeft:'10px solid #2FF3E0' }}>
            <Stack style={{height:'400px',width:'300px',marginLeft:'0px',display:'flex',alignContent:'center',alignItems:'center',}}>
               <Stack mb={10} style={{display:'flex',alignItems:'center',paddingTop:'10px'}}>
                <FaServer fontSize={100} color='#2FF3E0'/>
               <Typography fontSize={20}>Backend</Typography>

               </Stack>
               <Stack>
               <Typography>Html</Typography>
               <Typography>CSS</Typography>
               <Typography>Taillwines</Typography>
               <Typography>Materielle Ui</Typography>
               <Typography>Saas</Typography>
               <Typography>Javascript</Typography>


                  
               </Stack>
                 
            </Stack>
               
            </Stack>
            <Stack style={{height:'400px',width:'300px',marginLeft:'0px'}}> 
            <Stack style={{height:'400px',width:'300px',marginLeft:'0px',display:'flex',alignContent:'center',alignItems:'center'                                        }}>
               <Stack mb={10} style={{display:'flex',alignItems:'center',paddingTop:'10px'}}>
                <AiOutlineTool fontSize={100} color='#2FF3E0'/>
               <Typography fontSize={20}>Tools</Typography>

               </Stack>
               <Stack>
               <Typography style={{opecity:'0.4',color:'white'}}>Html</Typography>
               <Typography>CSS</Typography>
               <Typography>Taillwines</Typography>
               <Typography>Materielle Ui</Typography>
               <Typography>Saas</Typography>
               <Typography>Javascript</Typography>


                  
               </Stack>
                 
            </Stack>
                
            </Stack>
         </Stack>

 
        <button className='btn'><a href='#About' style={{}}>View Github </a></button>
   </Stack>

</section>
    );
}

export default Skills;
