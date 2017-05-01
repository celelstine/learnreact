import React from 'react';
import ReactDOM from 'react-dom';
//import {Route, BrowserRouter as Router,IndexRoute,   browserHistory} from 'react-router-dom';
import { Router, Route,  IndexRoute, IndexLink,hashHistory,Link } from 'react-router';
import App from './App.jsx';
import App1 from './component.jsx';
import App2 from './componentstate.jsx';
import App3 from './state.jsx';
import App4 from './props.jsx';
import App5 from './stateprops.jsx';
import App6 from './propsvalidation.jsx';
import App7 from './changeState.jsx';
import App8 from './componentEvent.jsx';
import App9 from './ref.jsx';
import App10 from './routes.jsx';
import {Home,About,Contact} from './routes.jsx';
//ReactDOM.render(<App9 />, document.getElementById('app'));
//ReactDOM.render(<App4 headerProp = "Header from props..." contentProp = "Content
  // from props..."/>, document.getElementById('app'));
 // using routess
	ReactDOM.render((
   <Router history = {hashHistory}>
      <Route path = "/" component = {App10}>
         <IndexRoute component = {Contact} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>

	
), document.getElementById('app'));