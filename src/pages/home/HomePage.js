import Divider from "../../componente/divider/Divider";
import Cabecalho from "../../componente/text/Cabeçalho/Cabecalho";
import Card from "../../componente/Cards/Card/Card";
import { BiCodeAlt } from "react-icons/bi"; // Corrigido o import dos ícones
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import "./style.css";
import CardRecent from "../../componente/Cards/CardRecent/CardRecent";
import Grid from "../../componente/Grid/Grid";
import item from "../../project.json";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <div className="apresentacao">
        <div>
          <div style={{ width: "450px" }}>
            <Cabecalho
              texto={"Oi, Eu Sou"}
              span={"Murillo Cardoso"}
              ponto={true}
              fontWeight={800}
              fontSize={40}
            ></Cabecalho>
          </div>
          <Divider width={"50"}></Divider>
          <p
            style={{
              textAlign: "justify",
              width: "40%",
              color: "black",
              fontWeight: "400",
            }}
          >
            Sou um entusiasta da área de tecnologia, em busca constante de
            evolução e aprendizado para aprimorar a qualidade e o desempenho das
            minhas áreas de atuação, as quais englobam o desenvolvimento móvel e
            de software.
          </p>
          <Link to="/sobre">Ler mais </Link>
        </div>
        <div>
          <div style={{ width: "450px" }}>
            <Cabecalho
              texto={"Desenvolvedor Mobile e Front-end Web"}
              ponto={true}
              fontWeight={800}
              fontSize={40}
            ></Cabecalho>
          </div>
          <div style={{ display: "flex", gap: "25px" }}>
            <BsGithub size={40} />
            <BsInstagram size={40} />
            <BsLinkedin size={40} />
          </div>
        </div>
      </div>
      <div className="MainInfo">
        <section className="OqueEuFiz">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h2 style={{ fontSize: "40px", fontWeight: "700", height: "15px" }}>
              Oque eu já fiz?
            </h2>
            <p>
              Abaixo tenho alguns trabalhos que ja realizei ,seja apenas para
              meu portifolio quando para vendas
            </p>
          </div>
          <div class="list-portfolio">
            <Card
              link={"#"}
              icone={<BiCodeAlt size={42} />}
              titulo={"Web Development"}
            ></Card>
            <Card
              link={"#"}
              icone={<BiCodeAlt size={42} />}
              titulo={"Mobile Development"}
            ></Card>
            <Card
              link={"#"}
              icone={<BiCodeAlt size={42} />}
              titulo={"Games"}
            ></Card>
            <Card
              link={"#"}
              icone={<BiCodeAlt size={42} />}
              titulo={"UI/Design"}
            ></Card>
          </div>
        </section>

        <Cabecalho
          texto={"Projetos recentes."}
          span={" Dê uma olhada em um dos meus trabalhos"}
          ponto={false}
          fontWeight={600}
          fontSize={25}
        ></Cabecalho>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div className="grid-layout">
          <CardRecent item={item[0]} />
          <CardRecent item={item[1]} />
          <CardRecent item={item[2]} />
          <CardRecent item={item[3]} />
        
          </div>
        </div>    <Cabecalho
          texto={"Experiencias."}
          span={" Minhas habilidades"}
          ponto={false}
          fontWeight={600}
          fontSize={25}
        ></Cabecalho>
           <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div className="grid-layout">
          <CardRecent item={item[0]} />
          <CardRecent item={item[1]} />
          <CardRecent item={item[2]} />
          <CardRecent item={item[3]} />
        
          </div>
        </div>
        {/* <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email:</label>
        <input type="email" placeholder="name@example.com">
      </div> */}
        <div class="mb-3" style={{ display: "flex", flexDirection: "column" }}>
          <label for="exampleFormControlTextarea1" class="form-label">
            Email
          </label>
         <input type="email" />
          <label for="exampleFormControlTextarea1" class="form-label">
            Escreva para mim:
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
