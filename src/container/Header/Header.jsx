import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components'

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor"/>
      <h1 className="app__header-h1">The key to fine Dining</h1>
      <p className="p__opensans" style={{margin: "2rem 0"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dicta? Corrupti hic odit corporis ea sequi velit excepturi saepe, aliquam, neque ullam itaque tempore.</p>
      <button type='button' className='custom__button' >Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="Header Img" />

    </div>

  </div>
);

export default Header;
