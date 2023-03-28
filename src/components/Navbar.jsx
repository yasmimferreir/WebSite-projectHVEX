import { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "./Navbar.css";
import { links } from "../data";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";


const Navbar = () => {
    const [isNavShow, setIsNavShow] = useState(false)

    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className="logo" onClick={ () => setIsNavShow(false) }>
                    <img src={ Logo } alt="Logo" />
                </Link>
                <ul className={ `nav__links ${isNavShow ? 'show__nav' : 'hide__nav'} ` } >
                    { links.map(({ name, path }, index) => {
                        return (
                            <li key={ index }>
                                <NavLink to={ path }
                                    onClick={ () => setIsNavShow(prev => !prev) }> { name }</NavLink>
                            </li>
                        )
                    }) }
                </ul>
                <button className="btn">Comprar agora</button>


                <button className="nav__toggle-btn" onClick={ () => setIsNavShow(prev => !prev) }>
                    {
                        isNavShow ? <MdOutlineClose /> : <GoThreeBars />
                    }
                </button>
            </div>
        </nav >
    )
}

export default Navbar