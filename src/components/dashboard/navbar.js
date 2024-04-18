import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Dropdown from './dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const [dropdown5, setDropdown5] = useState(false);
  const [dropdown6, setDropdown6] = useState(false);
  const [dropdown7, setDropdown7] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const onMouseEntera = () => {
   
      setDropdown1(false);
      setDropdown2(false);
      setDropdown3(false);
      setDropdown4(false);
      setDropdown5(false);
      setDropdown6(false);
      setDropdown7(false);
    
  };
  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
      setDropdown2(false);
      setDropdown3(false);
      setDropdown4(false);
      setDropdown5(false);
      setDropdown6(false);
      setDropdown7(false);
    } else {
      setDropdown1(true);
      setDropdown2(false);
      setDropdown3(false);
      setDropdown4(false);
      setDropdown5(false);
      setDropdown6(false);
      setDropdown7(false);
    }
  };
  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
      setDropdown2(false);
      setDropdown3(false);
      setDropdown4(false);
      setDropdown5(false);
      setDropdown6(false);
      setDropdown7(false);
    } else {
      setDropdown1(false);
      setDropdown2(true);
      setDropdown3(false);
      setDropdown4(false);
      setDropdown5(false);
      setDropdown6(false);
      setDropdown7(false);
    }
  };
  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
      setDropdown2(false);
      setDropdown3(false);
      setDropdown4(false);
      setDropdown5(false);
      setDropdown6(false);
      setDropdown7(false);
    } else {
      setDropdown1(false);
      setDropdown2(false);
      setDropdown3(true);
      setDropdown4(false);
      setDropdown5(false);
      setDropdown6(false);
      setDropdown7(false);
    }
  };
  const onMouseEnter4 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
      setDropdown2(false);
      setDropdown3(false);
      setDropdown4(false);
      setDropdown5(false);
      setDropdown6(false);
      setDropdown7(false);
    } else {
      setDropdown1(false);
      setDropdown2(false);
      setDropdown3(false);
      setDropdown4(true);
      setDropdown5(false);
      setDropdown6(false);
      setDropdown7(false);
    }
  };
  const onMouseEnter5 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
      setDropdown2(false);
      setDropdown3(false);
      setDropdown4(false);
      setDropdown5(false);
      setDropdown6(false);
      setDropdown7(false);
    } else {
      setDropdown1(false);
      setDropdown2(false);
      setDropdown3(false);
      setDropdown4(false);
      setDropdown5(true);
      setDropdown6(false);
      setDropdown7(false);
    }
  };
  const onMouseEnter6 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
      setDropdown2(false);
      setDropdown3(false);
      setDropdown4(false);
      setDropdown5(false);
      setDropdown6(false);
      setDropdown7(false);
    } else {
      setDropdown1(false);
      setDropdown2(false);
      setDropdown3(false);
      setDropdown4(false);
      setDropdown5(false);
      setDropdown6(true);
      setDropdown7(false);
    }
  };
  const onMouseEnter7 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
      setDropdown2(false);
      setDropdown3(false);
      setDropdown4(false);
      setDropdown5(false);
      setDropdown6(false);
      setDropdown7(false);
    } else {
      setDropdown1(false);
      setDropdown2(false);
      setDropdown3(false);
      setDropdown4(false);
      setDropdown5(false);
      setDropdown6(false);
      setDropdown7(true);
    }
  };
  const onMouseLeave1 = () => {
    if (window.innerWidth >= 960) {
      setDropdown1(true);
      setDropdown2(false);
      setDropdown3(false);
      setDropdown4(false);
      setDropdown5(false);
      setDropdown6(false);
      setDropdown7(false);
    }else{
      setDropdown1(false);
      setDropdown2(false);
      setDropdown3(false);
      setDropdown4(false);
      setDropdown5(false);
      setDropdown6(false);
      setDropdown7(false);
    }
  };
  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
      setDropdown2(false);
      setDropdown3(false);
      setDropdown4(false);
      setDropdown5(false);
      setDropdown6(false);
      setDropdown7(false);
    }
    
    
    else{
    setDropdown1(false);
    setDropdown2(true);
    setDropdown3(false);
    setDropdown4(false);
    setDropdown5(false);
    setDropdown6(false);
    setDropdown7(false);
    }
};
const onMouseLeave3 = () => {
  if (window.innerWidth < 960) {
    setDropdown1(false);
    setDropdown2(false);
    setDropdown3(false);
    setDropdown4(false);
    setDropdown5(false);
    setDropdown6(false);
    setDropdown7(false);
  }
  else{
  setDropdown1(false);
  setDropdown2(false);
  setDropdown3(true);
  setDropdown4(false);
  setDropdown5(false);
  setDropdown6(false);
  setDropdown7(false);
  }
};
const onMouseLeave4 = () => {
  if (window.innerWidth < 960) {
    setDropdown1(false);
    setDropdown2(false);
    setDropdown3(false);
    setDropdown4(false);
    setDropdown5(false);
    setDropdown6(false);
    setDropdown7(false);
  }
  else{
  setDropdown1(false);
  setDropdown2(false);
  setDropdown3(false);
  setDropdown4(true);
  setDropdown5(false);
  setDropdown6(false);
  setDropdown7(false);
  }
};
const onMouseLeave5 = () => {
  if (window.innerWidth < 960) {
    setDropdown1(false);
    setDropdown2(false);
    setDropdown3(false);
    setDropdown4(false);
    setDropdown5(false);
    setDropdown6(false);
    setDropdown7(false);
  }
  else {
  setDropdown1(false);
  setDropdown2(false);
  setDropdown3(false);
  setDropdown4(false);
  setDropdown5(true);
  setDropdown6(false);
  setDropdown7(false);
  }
};
const onMouseLeave6 = () => {
  if (window.innerWidth < 960) {
    setDropdown1(false);
    setDropdown2(false);
    setDropdown3(false);
    setDropdown4(false);
    setDropdown5(false);
    setDropdown6(false);
    setDropdown7(false);
  }
  else{
  setDropdown1(false);
  setDropdown2(false);
  setDropdown3(false);
  setDropdown4(false);
  setDropdown5(false);
  setDropdown6(true);
  setDropdown7(false);
  }
};
const onMouseLeave7 = () => {
  if (window.innerWidth < 960) {
    setDropdown1(false);
    setDropdown2(false);
    setDropdown3(false);
    setDropdown4(false);
    setDropdown5(false);
    setDropdown6(false);
    setDropdown7(false);
  }
  else{
  setDropdown1(false);
  setDropdown2(false);
  setDropdown3(false);
  setDropdown4(false);
  setDropdown5(false);
  setDropdown6(false);
  setDropdown7(true);
  }
};
  const MenuItems1=[
    {
      title:'For Employees',
      url:'/hressentialforemployees'
  },
  {
      title:'For HR Department',
      url:'/hressentialfordepartment'
  },
  ]
  const MenuItems2=[
    {
      title:'Travel Requisition form',
      url:'/travelrequisition'
  },
  {
      title:'Travel expenses submission form',
      url:'/travelexpensesform'
  },
  {
      title:'Travel History',
      url:'/travelhistory'
  }
  ]
  const MenuItems3=[
    {
      title:'Products',
      url:'/products'
  },
  {
      title:'BOM',
      url:'/BOM'
  },
  {
      title:'3D Models',
      url:'/3dmodels'
  },
  {
      title:'CAD 2D Drawings',
      url:'/cad2d'
  },
  {
      title:'Parts Library',
      url:'/partslibrary'
  }
  ]
  const MenuItems4=[
    {
      title:'Projects Display',
      url:'/projects'
  },
  {
      title:'Project Reports',
      url:'/projectreports'
  },
  ]
  const MenuItems5=[
    {
      title:'Performance based on KRA Format',
      url:'/KRA Format'
  },
  {
      title:'approved performance document',
      url:'/performancedocuments'
  },
  ]
  const MenuItems6=[
    {
      title:'learning policies',
      url:'/learningpolicies'
  },
  {
      title:'Company Policies',
      url:'/companypolicies'
  },
  ]
  const MenuItems7=[
    
    {
      title:'Display Calendar',
      url:'/display calendar'
  },
  {
      title:'Manage Appointments',
      url:'/manageappointments'
  },
  ]
  return (
    <>
      <nav className='navbar' onMouseLeave={onMouseEntera}>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/myCompany' className='nav-links' onClick={closeMobileMenu} onMouseEnter={onMouseEntera} onMouseLeave={onMouseEntera}>
              My Company
            </Link>
          </li>
           <li className='nav-item' onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}>
            <Link
              to='/hr'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              HR Essentials
               {/* <i className='fas fa-caret-down' /> */}
            </Link>
            {dropdown1 && <Dropdown MenuItems={MenuItems1}/>}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <Link
              to='/travel'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Travel Management
               {/* <i className='fas fa-caret-down' /> */}
            </Link>
            {dropdown2 && <Dropdown MenuItems={MenuItems2}/>}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter3}
            onMouseLeave={onMouseLeave3}
          >
            <Link
              to='/data'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Data Room
               {/* <i className='fas fa-caret-down' /> */}
            </Link>
            {dropdown3 && <Dropdown MenuItems={MenuItems3}/>}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter4}
            onMouseLeave={onMouseLeave4}
          >
            <Link
              to='/project'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Project Management
               {/* <i className='fas fa-caret-down' /> */}
            </Link>
            {dropdown4 && <Dropdown MenuItems={MenuItems4} />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter5}
            onMouseLeave={onMouseLeave5}
          >
            <Link
              to='/performance'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Performance Management
               {/* <i className='fas fa-caret-down' /> */}
            </Link>
            {dropdown5 && <Dropdown MenuItems={MenuItems5} />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter6}
            onMouseLeave={onMouseLeave6}
          >
            <Link
              to='/doc'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Documents
               {/* <i className='fas fa-caret-down' /> */}
            </Link>
            {dropdown6 && <Dropdown MenuItems={MenuItems6}/>}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter7}
            onMouseLeave={onMouseLeave7}
          >
            <Link
              to='/calendar'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Calendar
               {/* <i className='fas fa-caret-down' /> */}
            </Link>
            {dropdown7 && <Dropdown MenuItems={MenuItems7}/>}
          </li>
          
        </ul>
        
      </nav>
      
    </>
  );
}

export default Navbar;