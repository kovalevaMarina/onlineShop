import "./Hero.scss";
import Container from "react-bootstrap/Container";

function Hero() {
  return (
    <section className="hero">
      <Container style={{ height: "100%" }}>
        <div className="hero_wrapper d-flex justify-content-start align-items-center flex-column h-100 pt-5">
          <h4 className="title-h4">We represent</h4>
          <div className="hero_wrapper-title p-2">
            <h1 className="title-h1">New street collection</h1>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
