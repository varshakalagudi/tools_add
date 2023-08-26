import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div>
          <Link to="/getting-started" className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-star" aria-hidden="true" /><br />
            Getting started
          </Link>
          <Link to="/git-repository" className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-book" aria-hidden="true" /><br />
            Git repository
          </Link>
          <Link to="/code-sandbox" className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-briefcase" aria-hidden="true" /><br />
            Code Sandbox
          </Link>
          <Link to="/contributing" className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-arrow-up" aria-hidden="true" /><br />
            Contributing
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
