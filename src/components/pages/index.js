import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getBooks} from '../../actions/';
import {Books} from '../templates';

const Home = ({getBooks, books}) => {
  useEffect(()=>{
    getBooks();
  }, [getBooks]);
  const {isFetching, error, data} = books;
  return (
    <div className="p-5">
      <div className="row">
        <div className="col-md-10 offset-md-1 min-h-50v w-100">
          <Books isFetching={isFetching} error={error} data={(data && data.docs) || []}/>
        </div>
      </div>
    </div>
  );
};

Home.propTypes={
  getBooks: PropTypes.func.isRequired,
  books: PropTypes.object.isRequired,
};

const mapStateToProps=({books})=>({
  books,
});
export default connect(mapStateToProps, {getBooks})(Home);
