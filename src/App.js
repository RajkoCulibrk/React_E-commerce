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

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
    dispatch(getCategories());
  }, []);
  return (
    <Router>
      <div className="App">
        <NavbarComponent />

        <main>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/product/:id" component={Product} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
