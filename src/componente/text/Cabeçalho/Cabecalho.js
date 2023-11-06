import "./style.css"
function Cabecalho({ texto, span, fontSize, ponto ,fontWeight}) {
  return (
    <h2 className="title" style={{ color: 'black', fontWeight:fontWeight, fontSize: fontSize + 'px' }}>
      {texto} <span style={{ color: 'gray' }}>{span}</span>{ponto ? "." : ""}
    </h2>
  );
}

export default Cabecalho;
