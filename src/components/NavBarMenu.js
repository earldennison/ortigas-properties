import React from 'react'
import logo from '../assets/images/ortigasland.svg'
import {useLocation } from 'react-router-dom';
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
    <a href={link?link:"#"}>
        <div className="textwidget">
          <img src={logo} alt="Ortigas Land Properties" style={{marginTop:"20px"}} className="img-responsive" />
        </div>
      </a>
    </div>
)

const MenuItem = (props) => {
    const { link } = props;
    return <li className="menu-item" >
             <a href={link} > { props.children  } </a>
           </li>
}
 
const MultiMenu = ({ name,link,ul_offset,children }) => {
    
    return <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children " style = {{marginLeft:"43px"}}>
             <a   href= {link? link:'#'} > {name} </a>
      <ul className="sub-menu" style={{marginLeft:ul_offset? ul_offset:'0px'}}>
        {children}
      </ul>
    </li>
}

MultiMenu.Item = ({link,toggle_color,children}) =>{
    return <li className="menu-item" >
             <a href={link} style={toggle_color} >
             {children}
             </a>
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
        <MenuItem link='test'> Estates </MenuItem>
        <MenuItem> Malls </MenuItem>
        <MultiMenu name="Residences" ul_offset="-63px">
          <MultiMenu.Item link='todo'>
            Estancia
          </MultiMenu.Item>
        </MultiMenu>
      </NavBisection>
      <LogoHolder />
      <NavBisection position="right">
        <MultiMenu name="Offices" ul_offset='-72px'>
          <MultiMenu.Item link="todo">
            Ortigas East
          </MultiMenu.Item>
          <MultiMenu.Item link="todo">
            Capitiol Commons
          </MultiMenu.Item>
            <MultiMenu.Item link="todo">
              Ortigas Center
            </MultiMenu.Item>
        </MultiMenu>
        <MenuItem >
          About
        </MenuItem>
        <MenuItem >
          Contact
        </MenuItem>
      </NavBisection>
    </Header>
}
export default NavBarMenu;
export {MenuItem, MultiMenu}
