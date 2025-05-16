import Comontittle from "../Comontittle";
import Fall from "../Fall";
import Fblog from "../Fblog";
import Fonepromo from "../Fonepromo";
import Hotelmap from "../Hotelmap";
export default function Hotelflow() {
  return (
    <>
      <Fonepromo link="/Hotellisting" />
      <Comontittle tottl="Your recent searches" cdisnon="d-none" gaped="none" />
      <Hotelmap />
      <Comontittle
        tottl="Fall into travel"
        midlettl="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
        btnttl="See All"
      />
      <Fblog link="/detailstwo/" type="flight" />
      <Comontittle
        tottl="Fall into travel"
        midlettl="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
        btnttl="See All"
      />
      <Fall link="/Flightlisting" />
    </>
  );
}
