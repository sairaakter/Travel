import Comontittle from "../Comontittle";
import Fall from "../Fall";
import Fblog from "../Fblog";
import Fonepromo from "../Fonepromo";
import Map from "../Map";
export default function Flightflow() {
  return (
    <>
      <Fonepromo link="/Flightlisting" />
      <Comontittle
        tottl="Let's go places together"
        midlettl="Discover the latest offers and news and start planning your next trip with us."
        btnttl="See All"
      />
      <Map />
      <Comontittle
        tottl="Fall into travel"
        midlettl="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
        btnttl="See All"
      />
      <Fblog link="/details/" type="flightinner" />
      <Comontittle
        tottl="Fall into travel"
        midlettl="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
        btnttl="See All"
      />
      <Fall link="/Flightlisting" />
    </>
  );
}
