import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import Currency from "react-currency-formatter";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import ProductPolicy from "../components/Product/ProductPolicy";
import useFetchSingleProduct from "../Hooks/FetchSingleProductHook";
import { useHistory, useParams } from "react-router";
import useCheckIfInCart from "../Hooks/CheckIfInCart";
import { useSelector } from "react-redux";
import useHandleAddToCart from "../Hooks/UseAddRemoveFromCart";
import AmmountRegulator from "../components/Cart/AmmountRegulator";
import CarauselMultipleItems from "../components/core/Carausel";
import LoadingSpinner from "../components/core/LoadingSpinner";
import NoContent from "../components/core/NoContent";
const Product = () => {
  const { id } = useParams();

  const {
    cart,
    products: { featuredProducts, loadingFeaturedProducts }
  } = useSelector((state) => state);
  // eslint-disable-next-line
  const cartItem = cart.cartItems?.find((ci) => ci.product.productId == id);
  const history = useHistory();
  const { data, fetchProduct } = useFetchSingleProduct();
  const { product, loadingProduct } = data;
  const isInCart = useCheckIfInCart(id);
  const { handleAddToCart } = useHandleAddToCart();
  const [ammount, setAmmount] = useState(isInCart ? cartItem.ammount : 1);

  const handleAddToCartButton = (orderButton) => {
    if (isInCart) {
      if (orderButton) {
        history.push("/cart");
        return;
      }
      handleAddToCart(product, 0);
    } else {
      handleAddToCart(product, ammount);
    }
    if (orderButton) {
      history.push("/cart");
    }
  };

  useEffect(() => {
    fetchProduct(id);
    setAmmount(isInCart ? cartItem.ammount : 1);
    // eslint-disable-next-line
  }, [id]);
  return (
    <Container fluid>
      <Row>
        <>
          {" "}
          <Col xs={12} md={6} className="d-flex flex-column align-items-center">
            <Carousel className="product__carousel">
              {loadingProduct && (
                <Carousel.Item className="d-flex justify-content-center">
                  <LoadingSpinner dimensions={"200px"} />
                </Carousel.Item>
              )}

              <Carousel.Item>
                {!loadingProduct && !product ? (
                  <NoContent variant={"danger"} text={"Product not found"} />
                ) : (
                  <img
                    className="d-block w-100"
                    src={product?.publicUrl}
                    alt="First slide"
                  />
                )}
              </Carousel.Item>
              {product?.images.map((image) => (
                <Carousel.Item key={image.productImageId}>
                  <img
                    className="d-block w-100"
                    src={image.publicUrl}
                    alt="First slide"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <div className="product__cart-buttons w-100 p-3">
              <Row>
                {product && (
                  <>
                    <Col xs={6}>
                      <Button
                        onClick={() => handleAddToCartButton(true)}
                        variant="danger"
                        size="lg"
                        block
                      >
                        Order
                      </Button>
                    </Col>
                    <Col xs={6}>
                      <Button
                        variant={isInCart ? "success" : "warning"}
                        size="lg"
                        block
                        onClick={() => handleAddToCartButton()}
                      >
                        <FontAwesomeIcon icon={faCartPlus} />
                      </Button>
                    </Col>
                  </>
                )}
              </Row>
            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column ">
            <h4 className="p-3">{product?.name}</h4>

            <div className="product__price border-dark border-top border-bottom p-3">
              <div>
                Price:{" "}
                {product?.price && (
                  <Currency quantity={product?.price} currency="USD" />
                )}
              </div>
              <div>Shipping: Free</div>
              <div>Category: {product?.category?.name}</div>
            </div>
            <div className="product__policies border-dark border-top border-bottom d-flex justify-content-around p-3">
              <ProductPolicy icon={faTruck} text="Shipment within two days" />
              <ProductPolicy icon={faCheckDouble} text="Original waranty" />
              <ProductPolicy
                icon={faExchangeAlt}
                text="Return policy 10 days"
              />
            </div>
            <div className="product__qty d-flex justify-content-center p-3 w-50 align-self-center">
              {!loadingProduct && (
                <AmmountRegulator
                  product={product}
                  ammount={ammount}
                  setAmmount={setAmmount}
                />
              )}
            </div>
            <div className="product__description p-3">
              <h5>Description</h5>
              <p className="lead">{product?.description}</p>
            </div>
          </Col>
        </>

        {/*  {!loadingProduct && !product && <NoContent />} */}

        <Col xs={12}>
          <CarauselMultipleItems
            title={"Featured"}
            loading={loadingFeaturedProducts}
            products={featuredProducts}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
