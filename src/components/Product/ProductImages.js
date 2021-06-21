import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import useAddProductImage from "../../Hooks/AddProductImage";
import productPlaceholder from "../../images/product_placeholder.png";
import ProductImage from "./ProductImage";
const ProductImages = ({ data, setData }) => {
  const { src, submitting, handleSelect, uploadPicture } = useAddProductImage(
    data,
    setData
  );
  const uploadInput = useRef();
  const handleImageUpload = () => {
    uploadInput.current.click();
  };
  return (
    <Container
      fluid
      className="d-flex flex-row flex-wrap justify-content-center"
    >
      <input
        className={"d-none"}
        ref={uploadInput}
        onChange={(e) => handleSelect(e)}
        type="file"
      />

      <Figure className="align-self-center m-1 m-sm-3 mb-3 mb-sm-1 mt-sm-1 mt-3 ">
        <Figure.Image
          width={300}
          height={220}
          alt="171x180"
          src={src ? src : productPlaceholder}
        />
        <Figure.Caption>
          <div>Add picture</div>
          <button
            type="button"
            onClick={() => uploadPicture()}
            className="btn btn-dark"
            disabled={submitting || !src}
          >
            {submitting ? "Submitting" : "Upload"}
          </button>{" "}
          <button
            type="button"
            onClick={() => handleImageUpload()}
            className="btn btn-dark"
          >
            {"Chose"}
          </button>{" "}
        </Figure.Caption>
      </Figure>
      {data.product.images.map((image) => (
        <ProductImage
          key={image.productImageId}
          data={data}
          setData={setData}
          image={image}
        />
      ))}
    </Container>
  );
};

export default ProductImages;
