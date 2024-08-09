import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
  <div>

<nav className="navbar navbar-expand-lg bg-success">
  

  <div className="container-fluid">
    <a className="navbar-brand" href="#">

        <b>FullStack Application</b>
        
    </a>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    <Link className="btn btn-outline-light" to="/adduser">Add User</Link>
    
  </div>
</nav>
  </div>
  )
}
