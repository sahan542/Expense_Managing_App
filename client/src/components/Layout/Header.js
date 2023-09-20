import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { message } from 'antd';

const Header = () => {
  const[loginUser,setLoginUser] = useState('')
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
      setLoginUser(user)
    }
  },[]);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success('Logout Successfully');
    navigate('/login');
  }
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
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
      <li className='nav-item'>
        { " " }
        <p className='nav-item'>{loginUser && loginUser.name}</p>{ " " }
      </li>
      <li className='nav-item'>
              <button
                  to="/user" 
                  className='btn btn-primary' 
                  onClick={logoutHandler}
                  aria-current="page"> Logout
              </button>Logout
      </li>

    </ul>
    </div>
  </div>
</nav>

        
        </>
  )
}

export default Header;

