import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/Home/Homepage/Homepage";
import About from "./components/About/about";
import Consultants from "./components/Consultants/Consultants";
import Notfound from "./components/NotFound/Notfound";
import ServiceDetails from "./components/servicedetails/ServiceDetails";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./components/Privateroute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Homepage></Homepage>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/Consultants">
              <Consultants></Consultants>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/service/:serviceName">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route exact path="/">
              <Homepage></Homepage>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
