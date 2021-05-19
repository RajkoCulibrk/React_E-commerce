import React from "react";
import { useSelector } from "react-redux";
const SideNavContent = () => {
  const categories = useSelector((state) => state.categories);
  return (
    <div className="position-sticky sidenav-content d-flex flex-column ">
      <h5 className="text-center">Categories</h5>
      <div className="sidenav-content__categories d-flex flex-column">
        {categories.categories.map((category) => (
          <span className="sidenav-content__categories__category">
            {category.name}
          </span>
        ))}
      </div>
      <h5 className="text-center">Sort by</h5>
      <div className="sidenav-content__section  d-flex flex-column">
        <span className="sidenav-content__categories__category">
          Date Added
        </span>
        <span className="sidenav-content__categories__category">Price</span>
      </div>
    </div>
  );
};

export default SideNavContent;
