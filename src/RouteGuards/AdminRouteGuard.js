import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
/* for protection private routes in case the user is not logged in */
const AdminRouteGuard = ({ component: RouteComponent, ...rest }) => {
  const { user } = useSelector((state) => state.user);
  /*   const user = JSON.parse(localStorage.getItem("user")); */

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        user?.isAdmin ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/"} />
        )
      }
    />
  );
};

export default AdminRouteGuard;
