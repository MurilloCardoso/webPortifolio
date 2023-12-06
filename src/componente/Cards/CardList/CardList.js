import "./style.css";
function CardList({ item }) {
  return (
    <a className="CardList">
      <div>
        <img
          src={require(`../../icons/${item.img[0]}.png`)}
          alt={item.img[0]}
          key={item.img[0]}
          style={{ width: "30px", height: "40px" }}
        />
        <img
          src={require(`../../icons/${item.img[1]}.png`)}
          alt={item.img[1]}
          key={item.img[1]}
          style={{ width: "30px", height: "40px" }}
        />{" "}
        <img
          src={require(`../../icons/${item.img[2]}.png`)}
          alt={item.img[2]}
          key={item.img[2]}
          style={{ width: "30px", height: "40px" }}
        />
      </div>
      <h4>{item.title}</h4>
    </a>
  );
}

export default CardList;
