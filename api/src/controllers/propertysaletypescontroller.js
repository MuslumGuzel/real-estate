
import PropertySaleType from "../models/lookups/Propertysaletype.js";

export const createPropertySaleType = async (req, res, next) => {

    try {

        const newPropertySaleType = new PropertySaleType(req.body);

        await newPropertySaleType.save();
        res.status(200).send("PropertySaleType has been created.");
    } catch (error) {
        next(error);
    }
}

export const udpatePropertySaleType = async (req, res, next) => {

    try {
        const updatedPropertySaleType = await PropertySaleType
            .findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        
            res.status(200).json(updatedPropertySaleType);
    } catch (error) {
        next(error);
    }
}

export const deletePropertySaleType = async (req, res, next) => {

    try {
        await PropertySaleType
            .findByIdAndDelete(req.params.id);
        
            res.status(200).send("PropertySaleType has been deleted!");
    } catch (error) {
        next(error);
    }
}

export const getPropertySaleType = async (req, res, next) => {

    try {
        const propertySaleType = await PropertySaleType
            .findById(req.params.id);
        
            res.status(200).json(propertySaleType);
    } catch (error) {
        next(error);
    }
}

export const getAllPropertySaleTypes = async (req, res, next) => {

    try {
        const propertySaleTypes = await PropertySaleType
            .find();
        
            res.status(200).json(propertySaleTypes);
    } catch (error) {
        next(error);
    }
}
