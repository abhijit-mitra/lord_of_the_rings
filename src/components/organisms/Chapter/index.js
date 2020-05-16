import React, {memo} from 'react';
import PropTypes from 'prop-types';

const Chapter = memo(({id}) => (
  <div className='chapter col-md-6 mb-4'>
    <div className="border w-100 p-5">
      {id}
    </div>
  </div>
));

Chapter.propTypes={
  id: PropTypes.string.isRequired,
};

export default Chapter;
