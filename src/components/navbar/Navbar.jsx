import "./Navbar.scss"
import {motion} from 'framer-motion'
const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <div className="wrapper">
            <montion.span initial={{opacity:0, scale:0.5}}>Joel Polanco</montion.span>
            <div className="social">
                <a href="#"> <img src="./facebook.png" alt=""/> </a>
                <a href="#"> <img src="./instagram.png" alt=""/> </a>
                <a href="#"> <img src="./youtube.png" alt=""/> </a>

            </div>
        </div>
    </div>
  )
}

export default Navbar