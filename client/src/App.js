import React, { useState, useEffect } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import socket from 'socket.io-client';
import WebsocketTesting from './websocketTesting';

import theme from './themes/theme';
import Dashboard from './pages/dashboard/dashboard.component';
import Login from './pages/login/Login';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      {!isLoading && (
        <BrowserRouter>
          <Switch>
            <Route path="/" component={tokenVerified ? Dashboard : Login} />
          </Switch>
        </BrowserRouter>
      )}
      {}
    </MuiThemeProvider>
  );
}

export default App;
