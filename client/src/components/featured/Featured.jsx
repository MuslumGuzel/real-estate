import useFetch from "../../hooks/useFetch";
import "./featured.css";
import Skeleton from '@mui/material/Skeleton';
import { useLocation, useNavigate } from "react-router-dom";

const Featured = () => {

  const navigate = useNavigate();

  const { data, loading, reFetch } = useFetch("properties/countpropertybycity?cities=İstanbul,Ankara,İzmir,Adana");

  const handleClick = (e, value) => {
    e.preventDefault();
    navigate(`/properties?city=${value}`);
  }

  return (
    <div className="featured">
      {loading ? 
        <>
          <Skeleton variant="rectangular" width="100%" height={250} />
          <Skeleton variant="rectangular" width="100%" height={250} />
          <Skeleton variant="rectangular" width="100%" height={250} />
          <Skeleton variant="rectangular" width="100%" height={250} />
        </>
        :
        <>
          <div className="featuredItem"
            onClick={(e) => handleClick(e, "İstanbul")}
            >
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt=""
              className="featuredImg"              
            />
            <div className="featuredTitles">
              <h1>İstanbul</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem"
            onClick={(e) => handleClick(e, "Ankara")}
            >
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Ankara</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem"
            onClick={(e) => handleClick(e, "İzmir")}
            >
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>İzmir</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
          <div className="featuredItem"
            onClick={(e) => handleClick(e, "Adana")}
            >
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Adana</h1>
              <h2>{data[3]} properties</h2>
            </div>
          </div></>
      }


    </div>
  );
};

export default Featured;
