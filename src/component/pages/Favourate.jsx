import { useContext, useState } from "react";
import { CartContext } from "../../Context/Addfav";
import favsty from "../../style/Favourate.module.css";
import FavourateItem from "../FavourateItem";
export default function Favourate() {
  const { wishlistItems, wishlistItemstwo } = useContext(CartContext);
  const { removeFromWish, removeFromWishtwo } = useContext(CartContext);

  const [activeTab, setActiveTab] = useState("flight"); // 'flight' অথবা 'stay'

  const handleFlightClick = () => {
    setActiveTab("flight");
  };

  const handleStayClick = () => {
    setActiveTab("stay");
  };

  const Racc = wishlistItems.map((item) => (
    <FavourateItem
      key={item.id}
      favsty={favsty}
      item={item}
      is={true}
      removeFromWish={removeFromWish}
    />
  ));
  const Racctwo = wishlistItemstwo.map((item) => (
    <FavourateItem
      key={item.id}
      favsty={favsty}
      item={item}
      is={true}
      removeFromWish={removeFromWishtwo}
    />
  ));
  return (
    <>
      <div className={favsty.filtering}>
        <div className="container cus_container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className={favsty.fil_right}>
                <h2>Favourites</h2>
                <div className={favsty.promo_btn}>
                  <a
                    className={`${favsty.pflight_btn} ${
                      activeTab === "flight" ? favsty.active : ""
                    }`}
                    onClick={handleFlightClick}
                  >
                    <h5>Flights</h5>
                    <p>{wishlistItems.length} marked</p>
                  </a>
                  <span className={favsty.fjfdjs}></span>
                  <a
                    className={`${activeTab === "stay" ? favsty.active : ""}`}
                    onClick={handleStayClick}
                  >
                    <h5>Places</h5>
                    <p>{wishlistItemstwo.length} marked</p>
                  </a>
                  <div
                    className={`${favsty.animation} ${
                      activeTab === "flight"
                        ? favsty.start_hom
                        : favsty.start_contact
                    }`}
                  ></div>
                </div>
                <div className={favsty.hotel_wrapper}>
                  {activeTab === "flight" && Racc}
                  {activeTab === "stay" && Racctwo}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
