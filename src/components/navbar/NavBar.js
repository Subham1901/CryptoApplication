import React, { useState } from 'react';
import { FaBitcoin } from 'react-icons/fa';
import './navbar.css';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { useColorMode } from '@chakra-ui/react';

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={toggle ? 'navbar expanded' : 'navbar'}>
      <div className="logo">
        <Link to={'/'}>
          <FaBitcoin size={40} />
        </Link>
      </div>
      <div className="toggle-icon" onClick={handleToggle}>
        {toggle ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </div>
      <ul className="links">
        <li>
          <Link to={'/'} onClick={e => setToggle(false)}>
            Home
          </Link>
        </li>
        <li>
          {' '}
          <Link to={'/coins'} onClick={e => setToggle(false)}>
            Coins
          </Link>
        </li>
        <li>
          <ColorModeSwitcher />
        </li>
      </ul>
    </nav>
  );
}
