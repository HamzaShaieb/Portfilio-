import { Link, Stack } from '@mui/material';

import Logo from '../../assetes/images/Logo.png'
import { useState,useEffect } from 'react'

import '../../App.css'


const MyNavbar = () => {
  const [backgroundColor,setbackgroundColor]=useState('transparent')
  const [activelinkcolor,setactivelinkcolor]=useState('transparent')

  const activelinkstyle={

  }


  const activehandler  = ()=>{
    setactivelinkcolor('active')
  }

  useEffect(()=>{
    const handelscroll =()=>{
      const curentPosition = window.pageYOffset
      if(curentPosition > 20 )  {
        setbackgroundColor('#171c22')
        if(curentPosition > 1800){
          setactivelinkcolor('red')
        }else{
          setactivelinkcolor('white')
        }
      
      }else{
        setbackgroundColor('transparent')
      }  

    }
    window.addEventListener('scroll',handelscroll)
    
    return()=>{
      window.removeEventListener('scroll',handelscroll)
    }
    
  })

  return (
    <Stack style={{display:'flex',flexDirection:'row',backgroundColor:backgroundColor,justifyContent:'space-between',fontSize:'15px',zIndex:'100',justifyItems:'center' ,alignItems:'center',position:'fixed',fontWeight:'bold',height:'100px',width:'100%',padding:'10px ' ,paddingLeft:'180px',paddingRight:'130px'   }}  >
      <Link><img src={Logo}/></Link>
      <Stack style={{display:'flex',flexDirection:'row'}}>
        <a href='#Home' className='url'  >Home</a>
        <a href='#About' style={{fontSize:'25px',marginRight:'25px',textDecorationColor:'transparent',color:'white',}}>About</a>
        <a href='/Servecis' style={{fontSize:'25px',marginRight:'25px',textDecorationColor:'transparent',color:'white'}}>Serveces</a>
        <a href='#Skills' style={{fontSize:'25px',marginRight:'25px',textDecorationColor:'transparent',color:'white'}}>Skills</a>
        <a href='#Projects' style={{fontSize:'25px',marginRight:'25px',textDecorationColor:'transparent',color:'white'}}>Projects</a>
        <a href='/Contact' style={{fontSize:'25px',marginRight:'25px',textDecorationColor:'transparent',color:'white'}}>Contact</a>
      </Stack>
    </Stack>
  
  );
};

export default MyNavbar;
