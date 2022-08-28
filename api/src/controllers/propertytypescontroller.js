
import PropertyType from "../models/lookups/Propertytype.js";

export const createPropertyType = async (req, res, next) => {

    try {

        const newPropertyType = new PropertyType(req.body);

        await newPropertyType.save();
        res.status(200).send("PropertyType has been created.");
    } catch (error) {
        next(error);
    }
}

export const udpatePropertyType = async (req, res, next) => {

    try {
        const updatedPropertyType = await PropertyType
            .findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        
            res.status(200).json(updatedPropertyType);
    } catch (error) {
        next(error);
    }
}

export const deletePropertyType = async (req, res, next) => {

    try {
        await PropertyType
            .findByIdAndDelete(req.params.id);
        
            res.status(200).send("PropertyType has been deleted!");
    } catch (error) {
        next(error);
    }
}

export const getPropertyType = async (req, res, next) => {

    try {
        const propertyType = await PropertyType
            .findById(req.params.id);
        
            res.status(200).json(propertyType);
    } catch (error) {
        next(error);
    }
}

export const getAllPropertyTypes = async (req, res, next) => {

    try {
        const propertyTypes = await PropertyType
            .find();
        
            res.status(200).json(propertyTypes);
    } catch (error) {
        next(error);
    }
}
