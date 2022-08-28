import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img
        src={item?.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item?.title}</h1>
        <span className="siDistance">{item?.county?.name} / {item?.city?.name}</span>
        <span className="siTaxiOp">{item?.roomNumber?.name} {item?.propertyType?.name}</span>
        <span className="siTaxiOp">{item?.propertySaleType?.name}</span>
        <span className="siSubtitle">
          On the {item?.floorLocation} floor of a {item?.floorTotal}-storey building. 
        </span>
        <span className="siCancelOp">
          m² {item?.netDimension} / {item?.grossDimension}
        </span>        
      </div>
      <div className="siDetails">
        {item?.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item?.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">₺{item?.price}</span>
          <Link to={`/properties/${item?._id}`}>
            <button className="siCheckButton">See details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
