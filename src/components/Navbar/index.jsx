import "./Navbar.css"
import Logo from "../../assets/Logo"
import { FaTimes } from "react-icons/fa";
import { menu } from "../../data"
import { Link, animateScroll as scroll } from "react-scroll"
import { FaArrowUpRightFromSquare, FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <nav className="navbar card flex__center">
      {showSideBar && (
        <div className="aside__overlay"
          onClick={() => setShowSideBar(!showSideBar)}
        />)
      }
      <div className="flex__center logo"
        onClick={scroll.scrollToTop({ duration: 500 })} >
        <Logo />
      </div>
      <aside className={`flex__center sidebar ${showSideBar && "visible"}`}>
        <div className="flex sidebar__top">
          <span className="icon__container close__btn"
            onClick={() => setShowSideBar(!showSideBar)}>
            <FaTimes />
          </span>
        </div>
        <div className="flex sidebar__middle">
          {menu.map((menu, index) => (
            <Link
              to={menu.name.toLowerCase}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn__shine"
              activeClass="btn__shine"
              key={index}>{menu.name}</Link>
          ))}
        </div>
      </aside>
      <div className="flex__container buttons__wrapper">
        <Link to="contact" className="btn flex__center hire__btn">
          Hire Me <div className="flex__center icon">
            <FaArrowUpRightFromSquare />
          </div>
        </Link>
        <FaBarsStaggered className="menu" onClick={() => setShowSideBar(!showSideBar)} />
      </div>
    </nav >
  )
}

export default Navbar