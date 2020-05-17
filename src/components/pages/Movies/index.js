import React, {useEffect, memo, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getMovies} from '../../../actions';
import {Movies as MoviesTemplate} from '../../templates';
import {Container} from '../../organisms';
import {Search} from '../../molecules';
import {isEmpty} from '../../../utils/generic';

const Movies = memo(({getMovies, movies}) => {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(()=>{
    getMovies();
  }, [getMovies]);
  const handleSearch = (data)=>{
    setSearchResult(data);
  };
  const {isFetching, error, data} = movies;
  const options = (data && data.docs) || [];
  return (
    <>
      <Container>
        <>
          <div className="w-100 mb-5">
            <Search
              options = {options}
              searchBy={
                ['name', 'runtimeInMinutes', 'budgetInMillions', 'boxOfficeRevenueInMillions', 'academyAwardNominations', 'academyAwardWins']}
              placeholder='Search here...'
              onSearch = {handleSearch}
            />
          </div>
          <MoviesTemplate isFetching={isFetching} error={error} data={isEmpty(searchResult)?options:searchResult}/>
        </>
      </Container>
    </>
  );
});

Movies.propTypes={
  getMovies: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired,
};

const mapStateToProps=({movies})=>({movies});

export default connect(mapStateToProps, {getMovies})(Movies);
