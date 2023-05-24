import { Link, Stack } from '@mui/material';
import './Navbar.css'
import Logo from '../../assetes/images/Logo.png'

const MyNavbar = () => {
  return (
    <Stack style={{display:'flex',flexDirection:'row',justifyContent:'space-between',fontSize:'15px',zIndex:'100',justifyItems:'center' ,alignItems:'center',position:'fixed',fontWeight:'bold' }} mt={0}  padding={10} paddingRight={25} paddingLeft={35} padd width='100%' >
      <Link><img src={Logo}/></Link>
      <Stack style={{display:'flex',flexDirection:'row'}}>
        <a href='#Home' style={{fontSize:'25px',marginRight:'25px',textDecorationColor:'transparent',color:'white'}}  >Home</a>
        <a href='#About' style={{fontSize:'25px',marginRight:'25px',textDecorationColor:'transparent',color:'white'}}>About</a>
        <a href='/Servecis' style={{fontSize:'25px',marginRight:'25px',textDecorationColor:'transparent',color:'white'}}>Serveces</a>
        <a href='#Skills' style={{fontSize:'25px',marginRight:'25px',textDecorationColor:'transparent',color:'white'}}>Skills</a>
        <a href='#Projects' style={{fontSize:'25px',marginRight:'25px',textDecorationColor:'transparent',color:'white'}}>Projects</a>
        <a href='/Contact' style={{fontSize:'25px',marginRight:'25px',textDecorationColor:'transparent',color:'white'}}>Contact</a>
      </Stack>
    </Stack>
  
  );
};

export default MyNavbar;
