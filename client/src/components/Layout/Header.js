import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
        <>
<div>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet" />
</div>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>   
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link className="navbar-brand" href="/">Expense-Tracker</Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
      <Link className="nav-link active me-2" aria-current="page" to="/users">Users</Link>
    </div>
  </div>
</nav>

        
        </>
  )
}

export default Header;

