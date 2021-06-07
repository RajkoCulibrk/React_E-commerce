import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import CarauselItem from "../Product/CarauselItem";

const CarauselMultipleItems = ({ title }) => {
  const { products } = useSelector((state) => state.products);

  return (
    <Container fluid className="mt-5 mb-5">
      <h2>{title}</h2>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1200
            },
            items: 4,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 900,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1200,
              min: 900
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {products.map((product) => (
          <CarauselItem key={product.productId} product={product} />
        ))}
      </Carousel>
    </Container>
  );
};

export default CarauselMultipleItems;
