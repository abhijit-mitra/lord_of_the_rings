import React, {useEffect, memo} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getChaptersByBookId} from '../../../actions';
import {Chapters as ChaptersTemplate} from '../../templates';


const Chapters = memo(({match, getChaptersByBookId, chapters}) => {
  const bookId = match.params.bookId;
  useEffect(()=>{
    getChaptersByBookId(bookId);
  }, [bookId, getChaptersByBookId]);
  const {isFetching, error, data} = chapters;
  return (
    <div className="p-5">
      <div className="row">
        <div className="col-md-10 offset-md-1 min-h-50v w-100">
          <ChaptersTemplate isFetching={isFetching} error={error} data={(data && data.docs) || []}/>
        </div>
      </div>
    </div>
  );
});

Chapters.propTypes={
  match: PropTypes.object.isRequired,
  getChaptersByBookId: PropTypes.func.isRequired,
  chapters: PropTypes.object.isRequired,
};

const mapStateToProps=({chapters})=>({chapters});

export default connect(mapStateToProps, {getChaptersByBookId})(Chapters);
