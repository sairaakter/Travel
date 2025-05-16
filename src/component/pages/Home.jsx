import Blog from "../Blog";
import Comontittle from "../Comontittle";
import Places from "../Places";
import Promocod from "../Promocod";
import Review from "../Review";
export const Home = () => {
  return (
    <>
      <Promocod />
      <Comontittle
        tottl="Plan your perfect trip"
        midlettl="Search Flights & Places Hire to our most popular destinations"
        btnttl="See more places"
      />

      <Places />
      <Blog />
      <Comontittle
        tottl="Reviews"
        midlettl="What people says about Golobe facilities"
        btnttl="See All"
      />
      <Review />
    </>
  );
};
