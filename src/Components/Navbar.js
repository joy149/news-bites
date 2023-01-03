import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  handleMouseEnter =(event) => {
    const v = event.target;
    v.style.color = 'grey';
  }
  handleMouseLeave =(event) => {
    const v = event.target;
    v.style.color = 'white';
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsBites
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" onMouseEnter={(event) => this.handleMouseEnter(event)} onMouseLeave={(event) => this.handleMouseLeave(event)}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about" onMouseEnter={(event) => this.handleMouseEnter(event)} onMouseLeave={(event) => this.handleMouseLeave(event)}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/business" onMouseEnter={(event) => this.handleMouseEnter(event)} onMouseLeave={(event) => this.handleMouseLeave(event)}>
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/sports" onMouseEnter={(event) => this.handleMouseEnter(event)} onMouseLeave={(event) => this.handleMouseLeave(event)}>
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/entertainment" onMouseEnter={(event) => this.handleMouseEnter(event)} onMouseLeave={(event) => this.handleMouseLeave(event)}>
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/general" onMouseEnter={(event) => this.handleMouseEnter(event)} onMouseLeave={(event) => this.handleMouseLeave(event)}>
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/science" onMouseEnter={(event) => this.handleMouseEnter(event)} onMouseLeave={(event) => this.handleMouseLeave(event)}>
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/technology" onMouseEnter={(event) => this.handleMouseEnter(event)} onMouseLeave={(event) => this.handleMouseLeave(event)}>
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/health" onMouseEnter={(event) => this.handleMouseEnter(event)} onMouseLeave={(event) => this.handleMouseLeave(event)}>
                  Health
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
