import { Button, ButtonBase, Link, Stack, Typography ,Grid} from '@mui/material';
import React from 'react';


const Projects = () => {
    return (
        <section style={{marginTop:'300px',height:'1050px',width:'100%',backgroundColor:'#0A1015',position:'relative'}} id='Projects'>
        <Stack style={{display:'flex',flexDirection:'column',color:'white',alignItems:'center',height:'45%',marginTop:0 ,justifyContent:'center',paddingTop:'8%'}} padding={10}  >

<Stack style={{textAlign:'center',marginBottom:'70px'}}>
   <Typography style={{fontSize:'30px',borderBottom:'5px solid #2FF3E0'}}>Projects
</Typography>
   <Typography style={{fontSize:'15px',marginTop:'10px',opacity:'0.4'}}>View some my side and freelance projects </Typography>
</Stack>
 {/* Start */ }
  <div   style={{ display: 'grid',gridTemplateColumns: 'repeat(3, 500px)',gridGap: '30px',width:'1500px'}}>
      <div bgcolor='red' style={{ backgroundColor:'red', border:'4px solid black',height:'300px' ,borderRadius:'20px', opacity:'0.1',backgroundColor:'white' }}>
        {/* Content for the first div item */}
        aa
      </div>
      <div  bgcolor='red' style={{ backgroundColor:'red',border:'4px solid black' ,borderRadius:'20px',opacity:'0.1',backgroundColor:'white'  }}>
        {/* Content for the second div item */}
        ss
      </div>
      <div  bgcolor='red' style={{ backgroundColor:'red',border:'4px solid black',borderRadius:'20px',opacity:'0.1',backgroundColor:'white'  }}>
        {/* Content for the third div item */}
        ddd
      </div>
      <div bgcolor='red' style={{ backgroundColor:'red', border:'4px solid black' ,height:'300px',borderRadius:'20px',opacity:'0.1',backgroundColor:'white'}}>
        {/* Content for the first div item */}
        aa
      </div>
      <div  bgcolor='red' style={{ backgroundColor:'red',border:'4px solid black' ,borderRadius:'20px' ,opacity:'0.1',backgroundColor:'white' }}>
        {/* Content for the second div item */}
        ss
      </div>
      <div  bgcolor='red' style={{ backgroundColor:'red',border:'4px solid black' ,borderRadius:'20px', opacity:'0.4',opacity:'0.1',backgroundColor:'white' }}>
        {/* Content for the third div item */}
        ddd
      </div>
    </div>

<button className='btn'><a href='#About' style={{}}>All Projects </a></button>
</Stack>
   </section>





    );
}

export default Projects;
