import logo from "../pages/assets/icons/users.png";
import facebook from "../pages/assets/icons/facebook.png";
import ig from "..//pages/assets/icons/ig.png";
import twitter from "../pages/assets/icons/twitter.png";


const Navbar = () => {
    return (
        <div className="flex justify-between item-center">
                <il className="px-3 py-2" >
                    <a>
                        <img src={logo} alt="logo" width={40} className="cursor-pointer" />
                    </a>
                </il> 
            <ul className="hidden md:flex">
                <il className="px-3 py-2">
                    <a href="https://web.facebook.com/?_rdc=1&_rdr" target="blank" >
                        <img src={facebook} alt="facebook" width={50} /> {" "}
                    </a>
                </il>
                <li className="px-3 py-2">
                    <a href="https://www.instagram.com/" target="blank" >
                        <img src={ig} alt="ig" width={50} />
                    </a>
                </li>
                <li className="px-6 py-2">
                    <a href="https://twitter.com/home" target="blank" >
                        <img src={twitter} alt="twitter" width={50} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;