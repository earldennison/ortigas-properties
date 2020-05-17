import React, { useState, useEffect } from 'react';
import logo from '../assets/images/ortigasland.svg';
import { HashLink } from 'react-router-hash-link';
import { Link, useLocation } from 'react-router-dom';
import SideNav, { SideBarToggleButton } from './SideNav';
// import '../assets/css/bootstrap.css';
// import '../assets/css/ai-basic.css';
// import '../assets/css/header.css';
const Header = ({ location, children, top, isTop }) => {
  let toggle = location === '/estates' ? 'format-link' : '';
  return (
    <div
      id='header'
      className={`${toggle}`}
      style={{
        background: '#fff',
        position: 'fixed',
        top,
        zIndex: '999',
        width: '100%',
        display: 'block',
        boxShadow:
          '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
        transition: 'top 0.3s',
      }}>
      <div
        className='row'
        style={{
          marginBottom: isTop ? '20px' : '10px',
        }}>
        {children}
      </div>
    </div>
  );
};

const LogoHolder = ({ link }) => (
  <div className='logo-holder col-md-2 no-gutter hide-on-med-and-down show-on-large'>
    <Link to={link}>
      <div className='textwidget'>
        <img
          src={logo}
          alt='Ortigas Land Properties'
          style={{ marginTop: '20px' }}
          className='img-responsive'
        />
      </div>
    </Link>
  </div>
);

const MenuItem = ({ hashlink, link, children }) => {
  return (
    <li className='menu-item'>
      {!hashlink ? (
        <Link to={link}> {children} </Link>
      ) : (
        <HashLink smooth to={link}>
          {children}
        </HashLink>
      )}
    </li>
  );
};
const MultiMenu = ({ name, link, ul_offset, children, hashlink, isTop }) => {
  return (
    <li
      className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children '
      style={{ marginLeft: '43px' }}>
      <Link to={link ? link : '#'}> {name} </Link>
      <ul
        className='sub-menu'
        style={{
          marginLeft: ul_offset ? ul_offset : '0px',
          marginTop: isTop ? '-24px' : '-33px',
        }}>
        {children}
      </ul>
    </li>
  );
};

MultiMenu.Item = ({ link, toggle_color, children }) => {
  return (
    <li className='menu-item'>
      <Link to={link} style={{ ...toggle_color }}>
        {children}
      </Link>
    </li>
  );
};
const NavBisection = (props) => {
  const { position } = props;
  return (
    <div
      className={`col-md-5 hidden-sm hidden-xs navi-col navi-${position}-col`}>
      <ul className={`navi navi-${position}`}>{props.children}</ul>
    </div>
  );
};
const NavBarMenu = () => {
  const [top, setTop] = useState('0');
  let location = useLocation();

  useEffect(() => {
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos === 0) {
        setTop('0');
      } else {
        setTop('-10px');
      }
    };
  }, []);

  return (
    <>
      <Header location={location.pathname} top={top} isTop={top === '0'}>
        <NavBisection position='left'>
          <MenuItem link='/estates'>Estates</MenuItem>
          <MenuItem link='/'>Malls</MenuItem>
          <MultiMenu
            link='/listing-list/residences'
            name='Residences'
            ul_offset='-63px'
            isTop={top === '0'}>
            <MultiMenu.Item link='/listing-list/ortigas-east'>
              Ortigas East
            </MultiMenu.Item>
            <MultiMenu.Item link='/listing-list/capitol-commons'>
              Capitol Commons
            </MultiMenu.Item>
            <MultiMenu.Item link='/listing-list/circulo-verde'>
              Circulo Verde
            </MultiMenu.Item>
            <MultiMenu.Item link='/listing-list/greenhills-center'>
              Greenhillls Center
            </MultiMenu.Item>
            <MultiMenu.Item link='ortigas-center'>
              Ortigas Center
            </MultiMenu.Item>
          </MultiMenu>
        </NavBisection>
        <LogoHolder link='/' />
        <NavBisection position='right'>
          <MultiMenu
            name='Offices'
            link='/listing-list/offices'
            ul_offset='-72px'
            isTop={top === '0'}>
            <MultiMenu.Item link='/listing-list/ortigas-east'>
              Ortigas East
            </MultiMenu.Item>
            <MultiMenu.Item link='/listing-list/capitol-commons'>
              Capitiol Commons
            </MultiMenu.Item>
            <MultiMenu.Item link='/listing-list/ortigas-center'>
              Ortigas Center
            </MultiMenu.Item>
          </MultiMenu>
          <MenuItem link='/#about' hashlink={true}>
            About
          </MenuItem>
          <MenuItem
            link={{
              pathname: '/',

              hash: '#about',
            }}>
            Contact
          </MenuItem>
        </NavBisection>
        <div className='col hide-on-large-only pt-2 d-flex flex-row'>
          <div className='logo-holder'>
            <Link to='/'>
              <img src={logo} alt='Ortigas Land Properties' />
            </Link>
          </div>
        </div>
        <div className='col hide-on-large-only pt-4 d-flex flex-row-reverse'>
          <SideBarToggleButton />
        </div>
      </Header>
      <SideNav />
    </>
  );
};
export default NavBarMenu;
export { MenuItem, MultiMenu };
