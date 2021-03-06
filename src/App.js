import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './views/Home';
import Profile from './views/Profile';
import Single from './views/Single';
import Login from './views/Login';
import Logout from './views/Logout';
import {MediaProvider} from './contexts/MediaContext';
import {Container} from '@material-ui/core';
import Upload from './views/Upload';
import MyFiles from './views/MyFiles';
import Modify from './views/Modify';
import Calculator from './views/Calculator';
import Info from './views/Info';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <MediaProvider>
        <Container maxWidth="xl">
          <Nav />
          <main>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/home" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/single/:id" component={Single} />
              <Route path="/logout" component={Logout} />
              <Route path="/upload" component={Upload} />
              <Route path="/myfiles" component={MyFiles} />
              <Route path="/modify/:id" component={Modify} />
              <Route path="/Calculator" component={Calculator} />
              <Route path="/Info" component={Info} />
            </Switch>
          </main>
        </Container>
      </MediaProvider>
    </Router>
  );
};

export default App;
