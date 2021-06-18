import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { isMobile, isTablet } from "react-device-detect";

const PaginationComponent = ({ perPage, pages }) => {
  let history = useHistory();
  const location = useLocation();
  let params = new URLSearchParams(location.search);
  let page = params.get("page") ? params.get("page") * 1 : 1;

  const setPage = (pageNumber) => {
    params.set("page", pageNumber);
    history.push({
      search: params.toString()
    });
  };
  const handleNextPrev = (number) => {
    console.log(page * 1);
    page += number;
    setPage(page);
  };
  const handlePerPage = (number) => {
    params.set("perPage", number);
    history.push({
      search: params.toString()
    });
  };
  return (
    <Container fluid className="">
      <Row>
        <Col xs={12} sm={6} className="d-flex justify-content-center">
          <Pagination
            size={isMobile || isTablet ? "sm" : "md"}
            className="align-self-end"
          >
            <Pagination.Prev
              disabled={page === 1}
              onClick={() => handleNextPrev(-1)}
            />
            <Pagination.Item active={page === 1} onClick={() => setPage(1)}>
              {1}
            </Pagination.Item>

            {pages <= 5 &&
              pages > 2 &&
              Array(pages - 2)
                .fill(" ")
                .map((item, index) => {
                  return (
                    <Pagination.Item
                      key={index}
                      active={page === 2 + index}
                      onClick={() => setPage(2 + index)}
                    >
                      {2 + index}
                    </Pagination.Item>
                  );
                })}
            {pages > 5 && (
              <>
                <Pagination.Ellipsis />{" "}
                {page - 2 > 1 && (
                  <Pagination.Item onClick={() => setPage(page - 2)}>
                    {page - 2}
                  </Pagination.Item>
                )}
                {page - 1 > 1 && (
                  <Pagination.Item onClick={() => setPage(page - 1)}>
                    {page - 1}
                  </Pagination.Item>
                )}
                {page !== 1 && page !== pages && (
                  <Pagination.Item active>{page}</Pagination.Item>
                )}
                {pages - page > 1 && (
                  <Pagination.Item onClick={() => setPage(page + 1)}>
                    {page + 1}
                  </Pagination.Item>
                )}
                {pages - page > 2 && (
                  <Pagination.Item onClick={() => setPage(page + 2)}>
                    {page + 2}
                  </Pagination.Item>
                )}{" "}
                <Pagination.Ellipsis />
              </>
            )}

            {pages > 1 && (
              <Pagination.Item
                active={page === pages}
                onClick={() => setPage(pages)}
              >
                {pages}
              </Pagination.Item>
            )}
            <Pagination.Next
              disabled={page === pages}
              onClick={() => handleNextPrev(1)}
            />
          </Pagination>
        </Col>
        <Col xs={12} sm={6} className="d-flex justify-content-center">
          <div className="xxx">
            <Form.Group
              className="ml-auto "
              controlId="exampleForm.ControlSelect1"
            >
              <Form.Label>Items per page</Form.Label>
              <Form.Control
                size={isMobile || isTablet ? "sm" : "md"}
                onChange={(e) => handlePerPage(e.target.value)}
                className="text-align-center per_page"
                as="select"
                value={perPage}
              >
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
                <option>30</option>
              </Form.Control>
            </Form.Group>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PaginationComponent;
