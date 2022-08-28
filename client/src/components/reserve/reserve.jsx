import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import useFetch from "../../hooks/useFetch";
import { SearchContext } from '../../context/searchcontext';
import { useNavigate } from "react-router-dom";

import "./reserve.css";
import { useState } from "react";
import { useContext } from "react";
import axios from "axios";

const Reserve = ({ setOpen, hotelId }) => {

    const [selectedRooms, setSelectedRooms] = useState([]);
    const { dates } = useContext(SearchContext);
    const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);

    const getDatesInRange = (startDate, endDate) => {
        let list = [];

        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const date = new Date(start.getTime());


            while (date <= end) {

                list.push(new Date(date).getTime());
                date.setDate(date.getDate() + 1);
            }
        }

        return list;
    }

    const navigate = useNavigate();
    const handleClick = async () => {

        try {
            await Promise.all(
                selectedRooms.map(roomId => {
                    const res = axios.put(`/rooms/availability/${roomId}`
                        , { dates: allDates });

                    return res.data;
                })
            );

            setOpen(false);
            navigate("/");
        } catch (error) {

        }
    }

    const allDates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);
    const isAvailable = (roomNumber) => {

        const isFound = roomNumber.unavailableDates.some(
            date => allDates.includes(new Date(date).getTime())
        );

        return !isFound;
    }

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;

        setSelectedRooms(
            checked
                ? [...selectedRooms, value]
                : selectedRooms.filter((item) => item !== value)
        );
    };

    return (
        <div className="reserve">
            <div className="rContainer">
                <div>
                    <FontAwesomeIcon icon={faCircleXmark}
                        className="rClose" onClick={() => setOpen(false)} />
                </div>
                <span>Select your rooms:</span>
                {
                    data.map((item) => (
                        <div className="rItem">
                            <div className="rItemInfo">
                                <div className="rTitle">{item?.title}</div>
                                <div className="rDesc">{item?.desc}</div>
                                <div className="rMax">Max people : <b>{item?.maxPeople}</b></div>
                                <div className="rPrice">${item?.price}</div>
                                <div className="rSelectRooms">
                                    {
                                        item?.roomNumbers.map((roomNumber) => (
                                            <div className="room">
                                                <label>{roomNumber.number}</label>
                                                <input type="checkbox"
                                                    value={roomNumber._id}
                                                    onChange={handleSelect}
                                                    disabled={!isAvailable(roomNumber)} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
                <button className="rButton" onClick={handleClick}>Reserve Now!</button>
            </div>
        </div>
    )
}

export default Reserve