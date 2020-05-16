import React from 'react';
import {Route} from 'react-router-dom';
import ToDoPage from './components/pages/todo';

const App = () => (
  <div className='w-100'>
    <main>
      <Route exact path="/todo" component={ToDoPage} />
    </main>
  </div>
);

export default App;
