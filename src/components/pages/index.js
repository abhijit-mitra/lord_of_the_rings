import React, {memo} from 'react';
import {useHistory} from 'react-router-dom';

import {Container} from '../organisms';

const CardStyle={
  'height': '400px',
};

const Home = memo(() => {
  const history = useHistory();
  const handleBooksClick = ()=>{
    history.push('/books');
  };
  const handleMoviesClick = ()=>{
    history.push('/movies');
  };
  return (
    <>
      <Container>
        <div className="row">
          <div className="col-md-6">
            <div className="border-blue br-10 center-x-y cursor-pointer font-24 bold text-blue" style={CardStyle} onClick={handleBooksClick}>
              Books
            </div>
          </div>
          <div className="col-md-6">
            <div className="border-blue br-10 center-x-y cursor-pointer font-24 bold text-blue" style={CardStyle} onClick={handleMoviesClick}>
              Movies
            </div>
          </div>
        </div>
      </Container>
    </>
  );
});

export default Home;
