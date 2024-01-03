import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import Images from "../../assets/images";
import { LIGHT_THEME } from "../../constants/themeConstants";
import { FaChevronDown } from "react-icons/fa";
import "./Sidebar.scss";
import {
  MdOutlineGridView,
  MdOutlineBarChart,
  MdOutlineAttachMoney,
  MdOutlineCurrencyExchange,
  MdOutlineShoppingBag,
  MdOutlinePeople,
  MdOutlineMessage,
} from "react-icons/md";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <nav className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <img
            src={theme === LIGHT_THEME ? Images.LogoBlue : Images.LogoWhite}
            alt=""
          />
          <span className="sidebar-brand-text">tabernam.</span>
        </div>
        <button className="sidebar-dropdown-btn">
          <FaChevronDown />
        </button>
      </div>
      <div className="sidebar-menu">
        <ul className="menu-list">
          <li className="menu-item">
            <Link className="menu-link active">
              <span className="menu-link-icon">
                <MdOutlineGridView size={18} />
              </span>
              <span className="menu-link-text">Dashboard</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link">
              <span className="menu-link-icon">
                <MdOutlineBarChart size={20} />
              </span>
              <span className="menu-link-text">Statistics</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link">
              <span className="menu-link-icon">
                <MdOutlineAttachMoney size={20} />
              </span>
              <span className="menu-link-text">Payment</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link">
              <span className="menu-link-icon">
                <MdOutlineCurrencyExchange size={18} />
              </span>
              <span className="menu-link-text">Transactions</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link">
              <span className="menu-link-icon">
                <MdOutlineShoppingBag size={20} />
              </span>
              <span className="menu-link-text">Products</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link">
              <span className="menu-link-icon">
                <MdOutlinePeople size={20} />
              </span>
              <span className="menu-link-text">Customer</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link">
              <span className="menu-link-icon">
                <MdOutlineMessage size={18} />
              </span>
              <span className="menu-link-text">Messages</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
