import "./Header.scss";
import Logo from "../Logo/Logo";
import ShoppingCart from "../Icons/ShoppingCart";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <header className="header">
      <Row>
        <Col>
          <div className="header-top p-3">
            <p className="header-top_text m-0">
              Clothing that reflects your personality
            </p>
          </div>
        </Col>
      </Row>
      <div className="py-2">
        <Container>
          <Row>
            <Col>
              <Logo textColor="#222222" />
            </Col>
            <Col>
              <div className="d-flex align-items-center justify-content-end h-100">
                <div className="header-cart">
                  <ShoppingCart />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}

export default Header;
