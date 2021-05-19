import React from "react";
import { useSelector } from "react-redux";
import SideNavContent from "./SideNavContent";

const SideNav = () => {
  return (
    <div className="d-flex flex-column bg-dark   text-white h-100 position-relative">
      <SideNavContent />
    </div>
  );
};

export default SideNav;