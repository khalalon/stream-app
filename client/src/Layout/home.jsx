import React, { useState } from 'react';
import styled from 'styled-components';
import './home.css';

const NavWrapper = styled.nav``;

const Logo = styled.img``;

const NavList = styled.ul``;

const NavItem = styled.li``;

const NavLink = styled.a``;

const SubList = styled.ul``;

const SubListItem = styled.li`
  margin-bottom: 5px;
`;

const NavBar = () => {
  const [subListVisibility, setSubListVisibility] = useState({});

  const handleMouseEnter = (itemName) => {
    setSubListVisibility({ ...subListVisibility, [itemName]: true });
  };

  const handleMouseLeave = (itemName) => {
    setSubListVisibility({ ...subListVisibility, [itemName]: false });
  };

  return (
    <NavWrapper className="NavWrapper">
      <Logo src="src\assets\tfc.jpg" alt="TFC Logo" className="Logo" />
      <NavList className="NavList">
        <NavItem className="NavItem" onMouseEnter={() => handleMouseEnter('events')} onMouseLeave={() => handleMouseLeave('events')}>
          <NavLink href="/events" className="NavLink">EVENTS</NavLink>
          <SubList isVisible={subListVisibility['events']}>
            <SubListItem>Event 1</SubListItem>
            <SubListItem>Event 2</SubListItem>
          </SubList>
        </NavItem>
        <NavItem className="NavItem" onMouseEnter={() => handleMouseEnter('rankings')} onMouseLeave={() => handleMouseLeave('rankings')}>
          <NavLink href="/rankings" className="NavLink">RANKINGS</NavLink>
          <SubList isVisible={subListVisibility['rankings']}>
            <SubListItem>Ranking 1</SubListItem>
            <SubListItem>Ranking 2</SubListItem>
          </SubList>
        </NavItem>
        {/* Add more NavItems as needed */}
      </NavList>
      {/* Add other elements like search bar or user profile */}
    </NavWrapper>
  );
};

export default NavBar;