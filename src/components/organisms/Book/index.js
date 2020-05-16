import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import {Img} from '../../molecules';
import bookLogo from './lotr.jpg';
import './style.css';

const BookStyle={
  height: '400px',
};

const Book = ({name, id}) => {
  const history = useHistory();
  function handleClick() {
    history.push(`/${id}/chapters`);
  }
  return (
    <div className='col-md-4 mb-4'>
      <div className="border cursor-pointer w-100 position-relative"
        style={BookStyle} onClick={handleClick}>
        <div className="position-absolute w-100 h-100">
          <Img src={bookLogo}/>
        </div>
        <div className="book position-relative d-flex align-items-center justify-content-center w-100 h-100 px-5 light-overlay">
          <h3 className="position-relative text-center">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

Book.propTypes={
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
