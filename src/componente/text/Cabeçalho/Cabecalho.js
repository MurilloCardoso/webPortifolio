import "./style.css"
function Cabecalho({ texto, span, fontSize, ponto ,fontWeight}) {
  return (
    <h2 className="title" >
      {texto} <span style={{ color: 'gray' }}>{span}</span>{ponto ? "." : ""}
    </h2>
  );
}

export default Cabecalho;
