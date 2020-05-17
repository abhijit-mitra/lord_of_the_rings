import React from 'react';
import {useHistory} from 'react-router-dom';

import {Img} from '../../molecules';
import logo from './lotr_logo.png';
import './style.css';

const quickLinks = [{
  id: 1,
  title: 'Movies',
  route: '/movies',
}, {
  id: 2,
  title: 'Books',
  route: '/books',
}];

const Style={
  header: {
    height: '75px',
  },
};

const Header = () => {
  const history = useHistory();
  const handleClick = (route)=>()=>{
    history.push(route);
  };
  return (
    <div className='header fixed-top w-100 bg-blue d-flex align-items-center' style={Style.header}>
      <div className="row">
        <div className="col-md-10 offset-md-1 text-white">
          <div className="row">
            <div className="col-2 cursor-pointer" onClick={handleClick('/')}>
              <Img src={logo}/>
            </div>
            {
              quickLinks.map((elm)=>(
                <div className="col-2 center-x-y border quickLinks cursor-pointer" key={elm.id} onClick={handleClick(elm.route)}>
                  {elm.title}
                </div>))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
