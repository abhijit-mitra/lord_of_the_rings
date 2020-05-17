import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getBooks} from '../../../actions/';
import {Container} from '../../organisms';
import {Books as BooksTemplate} from '../../templates';

const Books = ({getBooks, books}) => {
  useEffect(()=>{
    getBooks();
  }, [getBooks]);
  const {isFetching, error, data} = books;
  return (
    <>
      <Container>
        <BooksTemplate isFetching={isFetching} error={error} data={(data && data.docs) || []}/>
      </Container>
    </>
  );
};

Books.propTypes={
  getBooks: PropTypes.func.isRequired,
  books: PropTypes.object.isRequired,
};

const mapStateToProps=({books})=>({
  books,
});
export default connect(mapStateToProps, {getBooks})(Books);
