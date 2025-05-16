import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import hotsty from "../../style/Hotaildetail.module.css";
import Airbucont from "../Airbucont";
import Amenties from "../Amenties";
import Avlablrom from "../Avlablrom";
import Detailsecondcon from "../Detailsecondcon";
import Hotreview from "../Hotreview";
import Locatom from "../Locatom";

import Navigated from "../Navigated";
export default function Hoteldetail() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    let data = [];
    if (type === "flight") {
      // এখানে আপনার ফ্লাইট ডেটা লোড করার লজিক লিখুন
      // সম্ভবত আপনি অন্য কোনো লোকাল স্টোরেজ কী ব্যবহার করছেন অথবা সরাসরি `revdata` ব্যবহার করতে পারেন
      const flightData = JSON.parse(localStorage.getItem("flightCards")) || []; // উদাহরণ
      data = flightData;
    } else if (type === "hotel") {
      data = JSON.parse(localStorage.getItem("cards")) || [];
    }

    const found = data.find((item) => item.id === parseInt(id));
    setCardData(found);
  }, [id, type]);

  if (!cardData) return <p>Loading...</p>;
  const breadcrumbLinks = [
    { name: "Turkey", path: "/Flightflow", active: false },
    { name: "Istanbul", path: "/Hotelflow", active: false },
    {
      name: "CVK Park Bosphorus Hotel Istanbul",
      path: "/Hotelflow",
      active: true,
    },
  ];
  return (
    <>
      {/* <p>{cardData.price}</p>
      <Link
        to={`/detailstwothird/${cardData.id}?type=${type}`}
        style={{
          textDecoration: "none",
          color: "inherit",
          width: "100%",
        }}
      >
        <button>to next page </button>
      </Link> */}
      <div className="container cus_container">
        <Navigated links={breadcrumbLinks} />
      </div>
      <div className={hotsty.airbus}>
        <div className="container cus_container">
          <Airbucont
            hotsty={hotsty}
            cardData={cardData}
            too={`/detailstwothird/${cardData.id}?type=${type}`}
          />
          <hr className={hotsty.comonhr} />
          <Detailsecondcon hotsty={hotsty} />
          <hr className={hotsty.comonhr} />
          <Avlablrom
            hotsty={hotsty}
            too={`/detailstwothird/${cardData.id}?type=${type}`}
          />
          <hr className={hotsty.comonhr} />
          <Locatom
            hotsty={hotsty}
            too={`/detailstwothird/${cardData.id}?type=${type}`}
          />
          <hr className={hotsty.comonhr} />
          <Amenties hotsty={hotsty} />
          <hr className={hotsty.comonhr} />
          <Hotreview hotsty={hotsty} />
        </div>
      </div>
    </>
  );
}
