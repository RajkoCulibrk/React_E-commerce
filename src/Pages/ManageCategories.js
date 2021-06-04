import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  createCategory,
  deleteCategory,
  updateCategory
} from "../Redux/Actions/CategoryActions";

const ManageCategories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  const [currentCategoryDelete, setCurrentCategoryDelete] = useState("");
  const [currentCategoryUpdate, setCurrentCategoryUpdate] = useState("");
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");

  const handleCreateCategory = (e) => {
    e.preventDefault();
    dispatch(createCategory(name));
    setName("");
  };
  const handleDeleteCategory = (e) => {
    e.preventDefault();
    dispatch(deleteCategory(currentCategoryDelete));
  };

  const handleUpdateCategory = (e) => {
    e.preventDefault();
    dispatch(
      updateCategory({ categoryId: currentCategoryUpdate, name: newName })
    );
    setNewName("");
  };

  useEffect(() => {
    setCurrentCategoryDelete(categories[0]?.categoryId);
    setCurrentCategoryUpdate(categories[0]?.categoryId);
  }, [categories]);

  return (
    <Container>
      <Form onSubmit={(e) => handleDeleteCategory(e)} className="mt-5">
        <h5>Delete Category</h5>
        <InputGroup>
          <Form.Control
            value={currentCategoryDelete}
            onChange={(e) => setCurrentCategoryDelete(e.target.value)}
            as="select"
          >
            {categories.map((category) => (
              <option key={category.categoryId} value={category.categoryId}>
                {category.name}
              </option>
            ))}
          </Form.Control>
          <InputGroup.Append>
            <Button type="submit" variant="btn btn-danger">
              Delete
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
      {/* update category */}
      <Form onSubmit={(e) => handleUpdateCategory(e)} className="mt-5">
        <h5>Update Category</h5>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Category </Form.Label>
          <Form.Control
            value={currentCategoryUpdate}
            onChange={(e) => setCurrentCategoryUpdate(e.target.value)}
            as="select"
          >
            {categories.map((category) => (
              <option key={category.categoryId} value={category.categoryId}>
                {category.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>New Name</Form.Label>
          <InputGroup>
            <Form.Control
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              type="text"
              placeholder="New Name"
            />
            <InputGroup.Append>
              <Button type="submit" className="btn  btn-primary">
                Update
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
      {/* new category */}
      <Form onSubmit={(e) => handleCreateCategory(e)} className="mt-5">
        <h5>New Category</h5>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Category Name</Form.Label>
          <InputGroup>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Category Name"
            />
            <InputGroup.Append>
              <Button type="submit" className="btn  btn-primary">
                Submit
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default ManageCategories;
