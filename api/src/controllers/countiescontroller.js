
import County from "../models/lookups/County.js";
import City from "../models/lookups/City.js";

export const createCounty = async (req, res, next) => {

    try {

        const city = await City.findById(req.body.cityId);

        const newCounty = new County({
            ...req.body,
            city
        });

        await newCounty.save();
        res.status(200).send("County has been created.");
    } catch (error) {
        next(error);
    }
}

export const udpateCounty = async (req, res, next) => {

    try {
        const updatedCounty = await County
            .findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        
            res.status(200).json(updatedCounty);
    } catch (error) {
        next(error);
    }
}

export const deleteCounty = async (req, res, next) => {

    try {
        await County
            .findByIdAndDelete(req.params.id);
        
            res.status(200).send("County has been deleted!");
    } catch (error) {
        next(error);
    }
}

export const getCounty = async (req, res, next) => {

    try {
        const county = await County
            .findById(req.params.id);
        
            res.status(200).json(county);
    } catch (error) {
        next(error);
    }
}

export const getAllCountys = async (req, res, next) => {

    try {
        const countys = await County
            .find();
        
            res.status(200).json(countys);
    } catch (error) {
        next(error);
    }
}
