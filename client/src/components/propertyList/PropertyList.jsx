import "./propertyList.css";
import useFetch from '../../hooks/useFetch';
import NumberFormat from 'react-number-format';
import { Skeleton, Typography } from '@mui/material';


const PropertyList = () => {

  const { data, loading, error } = useFetch("/properties");

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
  ]

  return (
    <div className="pList">

      {loading ?
        <>
          {images.map(() =>
          (
            <div className="pListItem">
              <Skeleton variant="rectangular" width="100%" height={150} />
              <div className="pListTitles">
                <Skeleton width="100%">
                  <Typography>.</Typography>
                </Skeleton>
                <Skeleton width="100%">
                  <Typography>.</Typography>
                </Skeleton>
                <Skeleton width="100%">
                  <Typography>.</Typography>
                </Skeleton>
                <Skeleton width="100%">
                  <Typography>.</Typography>
                </Skeleton>
              </div>
            </div>)
          )}
        </>
        :
        <>
          {data && images.map((img, index) => (
            <div className="pListItem" key={index}>
              <img
                src={img}
                alt=""
                className="pListImg"
              />
              <div className="pListTitles">
                <h1>{data[index]?.title}</h1>
                <NumberFormat value={data[index]?.price} displayType={'text'} thousandSeparator={true} prefix={'₺'} />
                <h2>{data[index]?.county?.name} / {data[index]?.city?.name}</h2>
                <h2>{data[index]?.roomNumber?.name}</h2>
              </div>
            </div>
          ))}
        </>
      }
    </div>
  );
};

export default PropertyList;
