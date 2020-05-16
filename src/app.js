import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/pages/';
import Chapters from './components/pages/Chapters';

const App = () => (
  <div className='w-100'>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/:bookId/chapters" component={Chapters} />
    </main>
  </div>
);

export default App;
