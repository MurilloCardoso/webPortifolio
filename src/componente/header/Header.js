import "./style.css"
import {Link} from 'react-router-dom';
function Header() {
    return (
        <header>
            <Link to="/webPortifolio/">Home  </Link>
            <Link to="/webPortifolio/sobre">Sobre  </Link>
           
        </header>
    );
  }
  
  export default Header;
  