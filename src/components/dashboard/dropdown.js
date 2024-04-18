import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown({MenuItems}) {
  const [click, setClick] = useState(false);
  const Navigate=useNavigate();
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item,index) => {
          return (
            <li key={index}>
              <Link to={item.path} onClick={() => {setClick(false);Navigate(item.path);}}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;