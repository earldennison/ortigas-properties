import React from 'react'
import logo from '../assets/images/ortigasland.svg'
import { HashLink } from 'react-router-hash-link'
import { Link,useLocation } from 'react-router-dom';
// import '../assets/css/bootstrap.css';
// import '../assets/css/ai-basic.css';
// import '../assets/css/header.css';
const Header = ({location, children}) =>{ 
    let toggle = location === "/estates"? "format-link":''
    return <div className={`main-header ${toggle}`}>
      <div className="row" >
      {children}
      </div>
    </div>
}

const LogoHolder = ({link}) =>( 
    <div className="logo-holder col-md-2 no-gutter">
    < Link to={link}>
        <div className="textwidget">
          <img src={logo} alt="Ortigas Land Properties" style={{marginTop:"20px"}} className="img-responsive" />
        </div>
      </Link>
    </div>
)

const MenuItem = ({hashlink,link, children}) => {
    return <li className="menu-item" >
             {
                 !hashlink?<Link to={link}> { children  } </Link> 
                 : <HashLink smooth to={link}>{ children}  </HashLink> 

             }
           </li>
}
const MultiMenu = ({ name,link,ul_offset,children, hashlink }) => {

    return <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children " style = {{marginLeft:"43px"}}>
             <Link   to= {link? link:'#'} > {name} </Link>
      <ul className="sub-menu" style={{marginLeft:ul_offset? ul_offset:'0px'}}>
        {children}
      </ul>
    </li>
}

MultiMenu.Item = ({link,toggle_color,children}) =>{
    return <li className="menu-item" >
             <Link to={link} style={toggle_color} >
             {children}
             </Link>
           </li>
}
const NavBisection = (props) => {
    const {position} = props 
    return <div className={`col-md-5 hidden-sm hidden-xs navi-col navi-${position}-col`}>
             <ul className={`navi navi-${position}`}>
               {props.children}
             </ul>
           </div>
}
const NavBarMenu = () =>{

    let location = useLocation()
    
    return<Header location={location.pathname} >
      <NavBisection position="left">
        <MenuItem link="/estates"> Estates </MenuItem>
        <MenuItem link="/"> Malls </MenuItem>
        <MultiMenu  link='/listing-list/residences' name="Residences" ul_offset="-63px">
          <MultiMenu.Item link='/listing-list/ortigas-east' > Ortigas East </MultiMenu.Item>
          <MultiMenu.Item link='/listing-list/capitol-commons' > Capitol Commons</MultiMenu.Item>
          <MultiMenu.Item link='/listing-list/circulo-verde'> Circulo Verde</MultiMenu.Item>
          <MultiMenu.Item link="/listing-list/greenhills-center"> Greenhillls Center</MultiMenu.Item>
          <MultiMenu.Item link="ortigas-center"> Ortigas Center</MultiMenu.Item>
        </MultiMenu>
      </NavBisection>
            <LogoHolder link="/"/>
      <NavBisection position="right">
        <MultiMenu name="Offices" link="/listing-list/offices" ul_offset='-72px'>
          <MultiMenu.Item link="/listing-list/ortigas-east">
            Ortigas East
          </MultiMenu.Item>
          <MultiMenu.Item link="/listing-list/capitol-commons">
            Capitiol Commons
          </MultiMenu.Item>
            <MultiMenu.Item link="/listing-list/ortigas-center">
              Ortigas Center
            </MultiMenu.Item>
        </MultiMenu>
        <MenuItem link="/#about" hashlink={true} >
          About
        </MenuItem>
        <MenuItem link={{
            pathname:'/',

            hash:'#about'
        }}>
          Contact
        </MenuItem>
      </NavBisection>
    </Header>
}
export default NavBarMenu;
export {MenuItem, MultiMenu}
