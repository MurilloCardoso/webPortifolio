import "./style.css";
import Cabecalho from "../text/Cabeçalho/Cabecalho";
import { BsDownload, BsGithub } from "react-icons/bs";
function CardMobile({ item }) {
  return (
    <div className="qualificacoes">
      <Cabecalho
        texto={item.title}
        span={item.description}
        ponto={false}
        fontSize={20}
      />
      <div className="item-dev-qualificacoes">
        <div id="phone">
          <div className="devices">
            {item.devices.map((img) => (
              <img
                src={require(`../../dbDevices/${img}.png`)}
                alt={img}
                key={img}
              />
            ))}
          </div>
          <div className="item-list-div">
            <p className="item-descricao">{item.text}</p>
            <div
              style={{
                gap: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <p className="item-descricao">Linguagens Utilizadas</p>
                <div className="list-linguagem-utilizada">
                  {item.ling.map((img) => (
                    <img
                      src={require(`../../icons/${img}.png`)}
                      alt={img}
                      key={img}
                      style={{ width: "30px", height: "40px" }}
                    />
                  ))}
                </div>
              </div>
              <div className="list-item-misc">
                <a
                  href={item.download}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingTop: "1px",
                    }}
                  >
                    <BsDownload
                      size={"25"}
                      fontWeight={800}
                      href={item.download}
                    />
                    <p>Download APK</p>
                  </div>
                </a>
                <a href={item.github} target="_blank" rel="noopener noreferrer">
                  {" "}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingTop: "1px",
                    }}
                  >
                    <BsGithub
                      size={"25"}
                      fontWeight={800}
                      href={item.githubd}
                    />

                    <p>Repositório</p>
                  </div>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMobile;
