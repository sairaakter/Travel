import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "../style/global.css";
import Layout from "./Layout";
import Addcard from "./pages/Addcard";
import Favourate from "./pages/Favourate";
import FlightBook from "./pages/FlightBook";
import Flightdetail from "./pages/Flightdetail";
import Flightflow from "./pages/Flightflow";
import Flightlisting from "./pages/Flightlisting";
import { Home } from "./pages/Home";
import Hotelcard from "./pages/Hotelcard";
import Hoteldetail from "./pages/Hoteldetail";
import Hoteldetaitwo from "./pages/Hoteldetailtwo";
import Hotelflow from "./pages/Hotelflow";
import Hotellisting from "./pages/Hotellisting";
import HotelTerm from "./pages/Hotelterm";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Term from "./pages/Term";
function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Flightflow" element={<Flightflow />} />
            <Route path="/Hotelflow" element={<Hotelflow />} />
            <Route path="/Favourate" element={<Favourate />} />
            <Route path="/Flightlisting" element={<Flightlisting />} />
            <Route path="/details/:id" element={<Flightdetail />} />
            <Route path="/flydetailstwo/:id" element={<FlightBook />} />
            <Route path="/flydetailsthree/:id" element={<Addcard />} />
            <Route path="/flydetailsfour/:id" element={<Term />} />
            <Route path="/Hotellisting" element={<Hotellisting />} />
            <Route path="/detailstwo/:id" element={<Hoteldetail />} />
            <Route path="/detailstwothird/:id" element={<Hoteldetaitwo />} />
            <Route path="/detailstwofour/:id" element={<Hotelcard />} />
            <Route path="/detailstwofive/:id" element={<HotelTerm />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
