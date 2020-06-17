import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

export const SideBarToggleButton = () => {
  return (
    <button
      className='sidenav-trigger btn-flat'
      data-target='slide-out'
      style={{ color: '#A59229' }}>
      <i className='fas fa-bars'></i>
    </button>
  );
};
const Item = ({ children, icon, to }) => {
  return (
    <li>
      <Link className='waves-effect' to={to}>
        {icon == null ? (
          <i className='fas fa-dot-circle' style={{ fontSize: '.7rem' }}></i>
        ) : (
          <i className={icon} style={{ color: '#A59229' }}></i>
        )}
        {children}
      </Link>
    </li>
  );
};
const ItemContainer = ({ children, to, title, icon }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <li>
        <a
          href='#!'
          className='waves-effect'
          to={to}
          onClick={handleToggle}
          style={{ postion: 'relative' }}>
          {title}
          <i className={icon} style={{ color: '#A59229' }}></i>
          <i
            className={toggle ? 'fas fa-angle-up' : 'fas fa-angle-down'}
            style={{
              color: '#A59229',
              position: 'absolute',
              top: '0',
              right: '0',
            }}></i>
        </a>
      </li>
      <div
        style={{
          position: 'relative',
          display: toggle ? 'block' : 'none',
          transition: 'top 0.3s',
        }}>
        {children}
      </div>
    </>
  );
};

class SideBar extends Component {
  componentDidMount() {
    M.Sidenav.init(this.sidenav);
  }
  render() {
    return (
      <>
        <ul
          id='slide-out'
          className='sidenav'
          ref={(sidenav) => {
            this.sidenav = sidenav;
          }}>
          <li>
            <div className='user-view p-4'>
              <img
                alt='img'
                src='https://res.cloudinary.com/kendev/image/upload/v1592385780/ortigas-properties/ortigasland_z2piyh.svg'
              />
            </div>
          </li>
          <Item to='/estates' icon='fas fa-home'>
            Estates
          </Item>
          <Item to='/' icon='fas fa-building'>
            Malls
          </Item>
          <ItemContainer title='Residences' icon='fas fa-house-user'>
            <Item to='/listing-list/ortigas-east'>Ortigas East</Item>
            <Item to='/listing-list/capitol-commons'>Capitol Commons</Item>
            <Item to='/listing-list/circulo-verde'>Circulo Verde</Item>
            <Item to='/listing-list/greenhills-center'>Greenhillls Cente</Item>
            <Item to='/ortigas-center'>Ortigas Center</Item>
          </ItemContainer>
          <ItemContainer title='Offices' icon='fas fa-briefcase'>
            <Item to='/listing-list/ortigas-east'>Ortigas East</Item>
            <Item to='/listing-list/capitol-commons'>Capitol Commons</Item>
            <Item to='/listing-list/ortigas-center'>Ortigas Center</Item>
          </ItemContainer>
          <Item to='/#about' icon='fas fa-address-card'>
            About
          </Item>
          <Item to='/' icon='fas fa-address-book'>
            Contact
          </Item>
        </ul>
      </>
    );
  }
}

export default SideBar;
