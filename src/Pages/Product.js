import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  ButtonGroup,
  Carousel,
  Col,
  Container,
  Row
} from "react-bootstrap";
import ProductPolicy from "../components/Product/ProductPolicy";
import useFetchSingleProduct from "../Hooks/FetchSingleProductHook";
import { useParams } from "react-router";
const Product = () => {
  const { id } = useParams();
  const { data, fetchProduct } = useFetchSingleProduct();
  const { product } = data;

  useEffect(() => {
    fetchProduct(id);
  }, []);
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} className="d-flex flex-column align-items-center">
          <Carousel className="product__carousel">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={product?.publicUrl}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dui23wclz/image/upload/v1621103753/bjjx8lq4y4uhf0nzj9gp.jpg"
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="product__cart-buttons w-100 p-3">
            <Row>
              <Col xs={6}>
                <Button variant="danger" size="lg" block>
                  Order
                </Button>
              </Col>
              <Col xs={6}>
                <Button variant="warning" size="lg" block>
                  <FontAwesomeIcon icon={faCartPlus} />
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <h4 className="p-3">{product?.name}</h4>

          <div className="product__price border-dark border-top border-bottom p-3">
            <div>Cena: {product?.price} $</div>
            <div>Shipping: Free</div>
            <div>Category: {product?.category.name}</div>
          </div>
          <div className="product__policies border-dark border-top border-bottom d-flex justify-content-around p-3">
            <ProductPolicy icon={faTruck} text="Shipment within two days" />
            <ProductPolicy icon={faCheckDouble} text="Original waranty" />
            <ProductPolicy icon={faExchangeAlt} text="Return policy 10 days" />
          </div>
          <div className="product__qty d-flex justify-content-center p-3">
            <ButtonGroup className="w-50 ">
              <Button variant="secondary">
                <FontAwesomeIcon icon={faChevronUp} />
              </Button>
              <div className="text-center w-50 ">12</div>
              <Button variant="secondary">
                <FontAwesomeIcon icon={faChevronDown} />
              </Button>
            </ButtonGroup>
          </div>
          <div className="product__description p-3">
            <h5>Description</h5>
            <p className="lead">{product?.description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
