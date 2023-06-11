import React from 'react';

import {SubHeading} from '../../components';
import {images} from '../../constants';

import './Chef.css';

const Chef = () => (

  <div className="app__bg app__wrapper section___padding">
    <div className="app__wrapper_img app__wrapper__img-reverse">
      <img src={images.chef} alt="Chef Img" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="Quote" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, laudantium!</p>

        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsa unde nisi amet et esse quae harum voluptate possimus ullam, suscipit id ducimus blanditiis mollitia consequuntur ex laborum? Placeat voluptatem suscipit culpa!</p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="Sign" />

      </div>
    </div>
  </div>
  
);

export default Chef;
