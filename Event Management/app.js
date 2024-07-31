// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import CreateEvent from './components/CreateEvent';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={EventList} />
          <Route exact path="/events/:id" component={EventDetails} />
          <Route exact path="/create-event" component={CreateEvent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
