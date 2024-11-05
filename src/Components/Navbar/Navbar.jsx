import React, { useContext,useRef } from 'react'
import './Navbar.css'
import cart_logo from '../Assets/cart_logo.svg'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {

    const [menu, setMenu] = React.useState("shop")
    const classNameForSelect = "nav-list-select"
    const Empty = ""
    const { getTotalCartItems } = useContext(ShopContext)
    const menuRef =useRef();

    const dropdown_toogle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open');
    }


    return (
        <div className='nav-container'>
            <nav className='nav-bar'>
                <div className='nav-logo'>
                    <h1>STORE</h1>
                </div>
                <img className='nav-dropdown' onClick={dropdown_toogle} src={dropdown} alt="" />
                <ul ref={menuRef} className='nav-list'>
                    <li onClick={() => setMenu("shop")}><Link className={menu === "shop" ? classNameForSelect : Empty} style={{ textDecoration: 'none' }} to='/'>Shop</Link></li>
                    <li onClick={() => setMenu("men")}><Link className={menu === "men" ? classNameForSelect : Empty} style={{ textDecoration: 'none' }} to='/mens'>Men</Link></li>
                    <li onClick={() => setMenu("women")}><Link className={menu === "women" ? classNameForSelect : Empty} style={{ textDecoration: 'none' }} to='/womens'>Women</Link></li>
                    <li onClick={() => setMenu("kids")}><Link className={menu === "kids" ? classNameForSelect : Empty} style={{ textDecoration: 'none' }} to='/kids'>Kids</Link></li>
                </ul>
                <div className='nav-right'>
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/cart'><img src={cart_logo} /></Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar