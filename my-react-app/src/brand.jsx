import "./styles/index.scss";

function Brand() {
  return (
    <section className="brand">
      <div className="brand__wrapper">
        <img
          className="brand__img"
          src="./assets/images/brands/versace.png"
          alt="versace"
        />
        <img
          className="brand__img"
          src="./assets/images/brands/zara.png"
          alt="zara"
        />
        <img
          className="brand__img"
          src="./assets/images/brands/gucci.png"
          alt="gucci"
        />
        <img
          className="brand__img"
          src="./assets/images/brands/prada.png"
          alt="prada"
        />
        <img
          className="brand__img"
          src="./assets/images/brands/calvin.png"
          alt="calvin"
        />
      </div>
    </section>
  );
}

export default Brand;
