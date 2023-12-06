import "./style.css";
import { FaUnity } from "react-icons/fa6";
import { RiFlutterFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";import { SiKotlin } from "react-icons/si";
import { MdOutlineWeb } from "react-icons/md";import { FaMobile } from "react-icons/fa6";
import { SiUnrealengine } from "react-icons/si";import { IoLogoAndroid } from "react-icons/io";
function CardRecent({ item }) {
  return (
    <div className="CardRecent"><div>
        <div className="items-title">{item.plataform==="web" ? <MdOutlineWeb size={30}/>:<FaMobile size={30}/>}<p className="title">{item.title}</p></div>
        <div className="disc">{item.description}</div>
        </div>
   
        <div className="lang">   {item.ling.map((language, index) => {
          if (language === "flutter") {
            return <RiFlutterFill  size={25} key={index} />;
          }else if(language === "android"){
            return <IoLogoAndroid size={25} key={index} />
          } else if (language === "unity") {
            return <FaUnity size={25} key={index} />;
          } else if (language === "java") {
            return <FaJava size={25} key={index} />;
          } else if (language === "kotlin") {
            return <SiKotlin size={25} key={index} />;
          } else if (language === "unrealEngine") {
            return <SiUnrealengine size={25} key={index} />;
          } else {
            return null; // Handle other languages or ignore
          }
        })}</div>
        
       
    </div>
  );
}

export default CardRecent;
