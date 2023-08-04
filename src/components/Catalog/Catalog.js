import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Catalog() {
  return (
    <section>
      <Container>
        <div>
          <h2>Catalog</h2>
          <h3>Most trendy clothes</h3>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <img></img>
              <Button variant="primary">Add to basket</Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export default Catalog;
