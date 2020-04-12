import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { navItems } from './config/nav';
import './scss/layout.scss';

const App = () => {
  return (
    <div className="main-container">
      <Router>
        <Switch>
          {navItems.map((item) => (
            <Route path={item.url} key={item.url}>
              <header>
                <div className="header-content">{item.label}</div>
              </header>
              {item.component}
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
