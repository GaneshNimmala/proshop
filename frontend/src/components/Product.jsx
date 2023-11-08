import { Card } from "react-bootstrap";

function Product({ products }) {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${products._id}`}>
        <Card.Img src={products.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${products._id}`}>
          <Card.Title as="div">
            <strong>{products.name}</strong>
          </Card.Title>
        </a>
        <Card.Title as="h3"> {products.price}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Product;
