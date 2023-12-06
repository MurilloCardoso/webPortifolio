
import "./style.css";
function Card({ titulo,icone,link}) {
    return (
        <a className="Card" href={link}>
            {icone && icone}
            {titulo && titulo} 
        </a>
    );
  }
  
  export default Card;
  