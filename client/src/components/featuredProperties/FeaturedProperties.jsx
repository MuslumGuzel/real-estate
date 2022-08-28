import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {

  const { data, loading, reFetch } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {
        loading ? "Loading" :
          <>
            {
              data.map(
                (value, index) => (
                  <div className="fpItem" key={value?._id}>
                    <img
                      src={value?.photos[0]}
                      alt=""
                      className="fpImg"
                    />
                    <span className="fpName">{value?.name}</span>
                    <span className="fpCity">{value?.city}</span>
                    <span className="fpPrice">Starting from ${value?.cheapestPrice}</span>
                    {value?.rating && <div className="fpRating">
                      <button>{value?.rating}</button>
                      <span>Excellent</span>
                    </div>}
                  </div>
                )
              )
            }
          </>
      }
    </div>
  );
};

export default FeaturedProperties;
