import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"

const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
       
        <li onClick={handleNav} ><Link  to="//www.linkedin.com/in/kishore-kumar-19689a233" target='_blank' className='nav-link'><FaLinkedin /></Link></li>
        <li onClick={handleNav} ><Link  to="//github.com/kishore-project" target='_blank' className='nav-link'><BsGithub /></Link></li>
        {/* <li onClick={handleNav} ><Link  to="//www.instagram.com/pjp_concepts" target='_blank' className='nav-link'><FaInstagram /></Link></li> */}
        <li onClick={handleNav} ><Link  to="//mailto:kishore.kumar.un@gmail.com" target='_blank' className='nav-link'><BiEnvelope /></Link></li>
  </ul>
  )
};

export default NavLinks;
