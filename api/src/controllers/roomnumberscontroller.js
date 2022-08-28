
import RoomNumber from "../models/lookups/Roomnumber.js";

export const createRoomNumber = async (req, res, next) => {

    try {

        const newRoomNumber = new RoomNumber(req.body);

        await newRoomNumber.save();
        res.status(200).send("RoomNumber has been created.");
    } catch (error) {
        next(error);
    }
}

export const udpateRoomNumber = async (req, res, next) => {

    try {
        const updatedRoomNumber = await RoomNumber
            .findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        
            res.status(200).json(updatedRoomNumber);
    } catch (error) {
        next(error);
    }
}

export const deleteRoomNumber = async (req, res, next) => {

    try {
        await RoomNumber
            .findByIdAndDelete(req.params.id);
        
            res.status(200).send("RoomNumber has been deleted!");
    } catch (error) {
        next(error);
    }
}

export const getRoomNumber = async (req, res, next) => {

    try {
        const roomNumber = await RoomNumber
            .findById(req.params.id);
        
            res.status(200).json(roomNumber);
    } catch (error) {
        next(error);
    }
}

export const getAllRoomNumbers = async (req, res, next) => {

    try {
        const roomNumbers = await RoomNumber
            .find();
        
            res.status(200).json(roomNumbers);
    } catch (error) {
        next(error);
    }
}
