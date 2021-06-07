import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/core/NavbarComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserData } from "./Redux/Actions/UserActions";
import { getCategories } from "./Redux/Actions/CategoryActions";
import Footer from "./components/core/Footer";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import AddProduct from "./Pages/AddProduct";
import ManageProducts from "./Pages/ManageProducts";
import UpdateProduct from "./Pages/UpdateProduct";
import ManageCategories from "./Pages/ManageCategories";
import ManageOrders from "./Pages/ManageOrders";
import OrderAdmin from "./Pages/OrderAdmin";
import AdminRouteGuard from "./RouteGuards/AdminRouteGuard";
import LoggedInRouteGuard from "./RouteGuards/LoggedInRouteGuard";
import NotLoggedInRouteGuard from "./RouteGuards/NotLoggedInRouteGuard";
import AccountInfo from "./Pages/AccountInfo";

function App() {
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());

    dispatch(getCategories());
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <NavbarComponent />

        <main>
          <Switch>
            <LoggedInRouteGuard path="/login" component={Login} />
            <LoggedInRouteGuard path="/register" component={Register} />

            <Route path="/product/:id" component={Product} />
            <Route path="/cart" component={Cart} />

            <AdminRouteGuard path="/addProduct" component={AddProduct} />
            <AdminRouteGuard
              path="/updateProduct/:id"
              component={UpdateProduct}
            />
            <AdminRouteGuard
              path="/manageProducts"
              component={ManageProducts}
            />
            <AdminRouteGuard
              path="/manageCategories"
              component={ManageCategories}
            />

            <NotLoggedInRouteGuard path="/account" component={AccountInfo} />
            <NotLoggedInRouteGuard path="/orders" component={ManageOrders} />
            <NotLoggedInRouteGuard path="/order/:id" component={OrderAdmin} />

            <Route path="/" component={Home} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
