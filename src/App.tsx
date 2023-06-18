import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PhotoPage from './pages/PhotoPage';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={PhotoPage} />
    </Router>
  );
};

export default App;
