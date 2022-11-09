import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvoder/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  console.log(user)
  const menuBar = <>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/services'}>Services</Link></li>
    {
      user?.uid ? <Link to={'/myReview'} className='mt-3'>My Review</Link> :
      ''
    }
  </>
  const handleLogOut = () => {
    logOut()
      .then(() => {

      })
      .catch(err => console.error(err))
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuBar}
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost normal-case text-xl">Tourist<span className='text-3xl text-amber-600'>Guide</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuBar}
        </ul>
      </div>
      <div className="navbar-end">
        <p className='mr-5'>{user?.displayName}</p>

        {
          user?.photoURL ? <img className='rounded-full w-7 mr-5' src={user?.photoURL} alt="" />
            :
            <FontAwesomeIcon className='mr-5' icon={faUser} />
        }

        {
          user?.uid ? <FontAwesomeIcon onClick={handleLogOut} icon={faLongArrowAltRight}></FontAwesomeIcon>
            :
            <>
              <Link to={'/login'}><button className="btn btn-outline btn-warning mr-3">Login</button></Link>
              <Link to={'/register'}><button className="btn btn-outline btn-warning">Register</button> </Link>
            </>
        }
      </div>
    </div>
  );
};

export default Header;

