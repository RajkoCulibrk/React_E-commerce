import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const SideNavContent = () => {
  const categories = useSelector((state) => state.categories);
  let history = useHistory();
  const location = useLocation();
  let params = new URLSearchParams(location.search);

  const handleCategory = (categoryId) => {
    history.push({
      search: `?categoryId=${categoryId}`
    });
  };
  const handleSortBy = (sortBy) => {
    params.set("sortBy", sortBy);
    history.push({
      search: params.toString()
    });
  };
  const handleOrder = (order) => {
    params.set("order", order);
    history.push({
      search: params.toString()
    });
  };
  return (
    <div className="position-sticky sidenav-content d-flex flex-column ">
      <h5 className="text-center">Categories</h5>
      <div className="sidenav-content__categories d-flex flex-column">
        {categories.categories.map((category, index) => (
          <span
            onClick={() => handleCategory(category.categoryId)}
            key={index}
            className="sidenav-content__categories__category"
          >
            {category.name}
          </span>
        ))}
      </div>
      <h5 className="text-center">Sort by</h5>
      <div className="sidenav-content__section  d-flex flex-column">
        <span
          onClick={() => handleSortBy("Date")}
          className="sidenav-content__categories__category"
        >
          Date Added
        </span>
        <span
          onClick={() => handleSortBy("Price")}
          className="sidenav-content__categories__category"
        >
          Price
        </span>
      </div>
      <h5 className="text-center">Order</h5>
      <div className="sidenav-content__section  d-flex flex-column">
        <span
          onClick={() => handleOrder("ASC")}
          className="sidenav-content__categories__category"
        >
          Ascending
        </span>
        <span
          onClick={() => handleOrder("DESC")}
          className="sidenav-content__categories__category"
        >
          Descending
        </span>
      </div>
    </div>
  );
};

export default SideNavContent;
