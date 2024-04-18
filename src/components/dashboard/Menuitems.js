import React from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from './dropdown.js';

const MenuItems = ({ items }) => {
  return (
    <li className="nav-items">
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu">
            {items.title}{' '}
          </button>
          <Dropdown submenus={items.submenu} />
        </>
      ) : (
        <NavLink href={items.url}>{items.title}</NavLink>
      )}
    </li>
  );
};

export default MenuItems;