import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const SideNavContent = ({ noSticky }) => {
  const categories = useSelector((state) => state.categories);
  let history = useHistory();
  const location = useLocation();
  let params = new URLSearchParams(location.search);
  const categoryId = params.get("categoryId");
  const sortBy = params.get("sortBy");
  const order = params.get("order");
  const handleCategory = (categoryId) => {
    params.set("categoryId", categoryId);
    history.push({
      search: params.toString()
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
  const removeCategory = () => {
    params.delete("categoryId");
    history.push({
      search: params.toString()
    });
  };
  return (
    <div
      className={` 
       ${
         noSticky ? "sidenav-content--my_margin " : "position-sticky"
       }  sidenav-content d-flex flex-column  `}
    >
      <h5 className="text-center sidenav-content__section_title ">
        Categories
      </h5>
      <div className="sidenav-content__categories d-flex flex-column">
        <span
          onClick={() => removeCategory()}
          className={`${
            !categoryId && "sidenav-content__categories__category--active"
          } sidenav-content__categories__category`}
        >
          All Categories
        </span>
        {categories.categories.map((category, index) => (
          <span
            onClick={() => handleCategory(category.categoryId)}
            key={index}
            className={` ${
              categoryId * 1 === category.categoryId &&
              "sidenav-content__categories__category--active"
            } sidenav-content__categories__category`}
          >
            {category.name}
          </span>
        ))}
      </div>
      <h5 className="text-center sidenav-content__section_title">Sort by</h5>
      <div className="sidenav-content__section  d-flex flex-column">
        <span
          onClick={() => handleSortBy("Date")}
          className={`${
            sortBy === "Date" && "sidenav-content__categories__category--active"
          } sidenav-content__categories__category`}
        >
          Date Added
        </span>
        <span
          onClick={() => handleSortBy("Price")}
          className={`${
            sortBy === "Price" &&
            "sidenav-content__categories__category--active"
          } sidenav-content__categories__category`}
        >
          Price
        </span>
      </div>
      <h5 className="text-center sidenav-content__section_title">Order</h5>
      <div className="sidenav-content__section  d-flex flex-column">
        <span
          onClick={() => handleOrder("ASC")}
          className={`${
            order === "ASC" && "sidenav-content__categories__category--active"
          } sidenav-content__categories__category`}
        >
          Ascending
        </span>
        <span
          onClick={() => handleOrder("DESC")}
          className={`${
            order === "DESC" && "sidenav-content__categories__category--active"
          } sidenav-content__categories__category`}
        >
          Descending
        </span>
      </div>
    </div>
  );
};

export default SideNavContent;
