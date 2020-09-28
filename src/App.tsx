import React from 'react';
import './App.css';
import SignIn from './pages/SignIn';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import {theme} from './theme';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Switch>
                <Route exact path={'/'}>
                    <SignIn />
                </Route>
                <Route path={'/home'}>
                    <Home />
                </Route>
            </Switch>

        </ThemeProvider>
    </div>
  );
}

export default App;
