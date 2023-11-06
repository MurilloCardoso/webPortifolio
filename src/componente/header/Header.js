import "./style.css"
import {Link} from 'react-router-dom';
function Header() {
    return (
        <header>
            <a href="/">Home</a>
            <Link to="/sobre">Sobre  </Link>
            <a href="./sobre.html">Portfolio</a>
        </header>
    );
  }
  
  export default Header;
  