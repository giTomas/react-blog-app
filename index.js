import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Container from './components/app';
import './assets/css/reset.css';


// import {Router, Route, Link, hashHistory, browserHistory} from 'react-router';

/*
ReactDOM.render(
  <App />,
  document.getElementById('root')
)*/

const renderApp = () =>
    render(
      <Container />,
      document.getElementById('root')
    );

// renderEl2();



renderApp();
