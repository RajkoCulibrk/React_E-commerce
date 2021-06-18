import React, { useEffect, useRef } from "react";
import { Button, Col, Figure, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import useAddNewProduct from "../../Hooks/AddNewProduct";
import productPlaceholder from "../../images/product_placeholder.png";

const AddUpdateProductForm = ({ product }) => {
  const { categories } = useSelector((state) => state.categories);
  const {
    data,
    handleSelect,
    src,
    handleChange,
    submitData,
    submitting,
    file,
    setData,
    setSrc
  } = useAddNewProduct(product);
  const uploadInput = useRef();

  const handleImageUpload = () => {
    uploadInput.current.click();
  };
  useEffect(() => {
    if (!product) {
      setData({ ...data, categoryId: categories[0]?.categoryId });
    }
    // eslint-disable-next-line
  }, [categories]);
  console.log("render");
  return (
    <Form
      onSubmit={(e) => submitData(e, product?.productId)}
      className="d-flex flex-column justify-content-center"
    >
      <h4 className="text-center">
        {product ? "Update Product" : "New Product"}
      </h4>
      {JSON.stringify(data)}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          value={data.name}
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Product Name"
        />
      </Form.Group>
      <Form.Row>
        <Col xs={6}>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              value={data.price}
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Price"
            />
          </Form.Group>
        </Col>
        <Col xs={6}>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Category</Form.Label>
            <Form.Control
              value={data.categoryId ? data.categoryId : 5}
              onChange={(e) => handleChange(e)}
              name="categoryId"
              as="select"
            >
              {categories.map((c, index) => {
                return (
                  <option key={index} value={c?.categoryId}>
                    {c?.name}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
        </Col>
      </Form.Row>

      <Form.Row>
        <Col xs={6}>
          <Form.Group className="mb-3" controlId="new">
            <Form.Check
              defaultChecked={data.new}
              onChange={(e) => handleChange(e)}
              type="checkbox"
              name="new"
              label="Mark as new"
            />
          </Form.Group>
        </Col>
        <Col xs={6}>
          <Form.Group className="mb-3" controlId="featured">
            <Form.Check
              defaultChecked={data.featured}
              onChange={(e) => handleChange(e)}
              name="featured"
              type="checkbox"
              label="Mark as featured"
            />
          </Form.Group>
        </Col>
      </Form.Row>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          value={data.description}
          onChange={(e) => handleChange(e)}
          as="textarea"
          placeholder="Description"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Short Description</Form.Label>
        <Form.Control
          name="shortDescription"
          value={data.shortDescription}
          onChange={(e) => handleChange(e)}
          as="textarea"
          placeholder="Short Description"
        />
      </Form.Group>
      <Form.Group className={"d-none"}>
        <Form.File
          ref={uploadInput}
          onChange={(e) => handleSelect(e)}
          name="file"
          label="Example file input"
        />
      </Form.Group>

      <Figure className="align-self-center">
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src={src ? src : productPlaceholder}
        />
        <Figure.Caption>
          Main picture.{" "}
          <button
            type="button"
            onClick={() => handleImageUpload()}
            className="btn btn-dark"
          >
            {src ? "Change" : "Chose"}
          </button>{" "}
        </Figure.Caption>
      </Figure>
      <br />
      <Button variant="primary" type="submit">
        {product ? "Update" : "Submit"}
      </Button>
    </Form>
  );
};

export default AddUpdateProductForm;
