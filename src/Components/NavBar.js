import React from 'react'

export default function NavBar() {
  return (
    <nav className="autohide navbar navbar-expand-lg navbar-dark" id="navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html" id="logo">
        
             <img src="images/RAVEN-EYELOGO.png" width="150" height="80"/> 
        
        
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"/>
                <a className="nav-link active" href="index.html">Home</a>
             
              <li className="nav-item">
                <a className="nav-link active" href="#gallary">Gallary</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#about">About</a>
              </li>
             
            </ul>
            
          </div>
        </div>
      </nav>
  );
}
