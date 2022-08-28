import { Link } from "react-router-dom";
import "./searchItem.css";
import { Skeleton, Typography } from '@mui/material';

const SearchItemSkeleton = ({ item }) => {

    const traitInfo = Array(6).fill({});

    return (
        traitInfo.map(() => (
            <div className="searchItem">
                <Skeleton variant="rectangular" width={200} height={200} />
                <div className="siDesc">
                    <h1 className="siTitle">
                        <Skeleton width="100%">
                            <Typography>.</Typography>
                        </Skeleton>
                    </h1>
                    <span className="siDistance">
                        <Skeleton width="75%">
                            <Typography>.</Typography>
                        </Skeleton>
                    </span>
                    <span className="siDistance">
                        <Skeleton width="50%">
                            <Typography>.</Typography>
                        </Skeleton>
                    </span>
                    <span className="siDistance">
                        <Skeleton width="25%">
                            <Typography>.</Typography>
                        </Skeleton>
                    </span>
                </div>
                <div className="siDetails">
                    <Skeleton width="100%">
                        <Typography>.</Typography>
                    </Skeleton>
                </div>
            </div>
        ))

    );
};

export default SearchItemSkeleton;
