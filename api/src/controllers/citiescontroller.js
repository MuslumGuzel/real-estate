
import City from "../models/lookups/City.js";

export const createCity = async (req, res, next) => {

    try {

        const newCity = new City(req.body);

        await newCity.save();
        res.status(200).send("City has been created.");
    } catch (error) {
        next(error);
    }
}

export const udpateCity = async (req, res, next) => {

    try {
        const updatedCity = await City
            .findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        
            res.status(200).json(updatedCity);
    } catch (error) {
        next(error);
    }
}

export const deleteCity = async (req, res, next) => {

    try {
        await City
            .findByIdAndDelete(req.params.id);
        
            res.status(200).send("City has been deleted!");
    } catch (error) {
        next(error);
    }
}

export const getCity = async (req, res, next) => {

    try {
        const city = await City
            .findById(req.params.id);
        
            res.status(200).json(city);
    } catch (error) {
        next(error);
    }
}

export const getAllCitys = async (req, res, next) => {

    try {
        const citys = await City
            .find();
        
            res.status(200).json(citys);
    } catch (error) {
        next(error);
    }
}
