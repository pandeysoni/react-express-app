import React from 'react';
import { Link } from 'react-router';
import { LoginLink, LogoutLink, Authenticated, NotAuthenticated } from 'react-stormpath';

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div id="navbar-collapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <Authenticated>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </Authenticated>
            </ul>
            <ul className="nav navbar-nav navbar-right">
            <NotAuthenticated>
              <li>
                <LoginLink />
              </li>
            </NotAuthenticated>
            <NotAuthenticated>
              <li>
                <Link to="/register">Create Account</Link>
              </li>
            </NotAuthenticated>
            <Authenticated>
              <li>
                <LogoutLink />
              </li>
            </Authenticated>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}