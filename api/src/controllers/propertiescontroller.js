
import Property from "../models/Property.js";
import City from '../models/lookups/City.js';
import County from '../models/lookups/County.js';
import PropertySaleType from '../models/lookups/PropertySaletype.js';
import PropertyType from '../models/lookups/Propertytype.js';
import RoomNumber from '../models/lookups/Roomnumber.js';

export const createProperty = async (req, res, next) => {

    try {

        const city = await City.findById(req.body.cityId);
        const county = await County.findById(req.body.countyId);
        const propertySaleType = await PropertySaleType.findById(req.body.propertySaleTypeId);
        const propertyType = await PropertyType.findById(req.body.propertyTypeId);
        const roomNumber = await RoomNumber.findById(req.body.roomNumberId);
        
        const newProperty = new Property({
            ...req.body,
            city: city,
            county,
            propertySaleType,
            propertyType,
            roomNumber,
        });

        await newProperty.save();
        res.status(200).send("Property has been created.");
    } catch (error) {
        next(error);
    }
}

export const udpateProperty = async (req, res, next) => {

    try {
        const updatedProperty = await Property
            .findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        
            res.status(200).json(updatedProperty);
    } catch (error) {
        next(error);
    }
}

export const deleteProperty = async (req, res, next) => {

    try {
        await Property
            .findByIdAndDelete(req.params.id);
        
            res.status(200).send("Property has been deleted!");
    } catch (error) {
        next(error);
    }
}

export const getProperty = async (req, res, next) => {

    try {
        const property = await Property
            .findById(req.params.id);
        
            res.status(200).json(property);
    } catch (error) {
        next(error);
    }
}

export const getAllPropertys = async (req, res, next) => {    

    try {
        const propertys = await Property
            .find({
                ...req.query,
            }).limit(req.query.limit);
        
            res.status(200).json(propertys);
    } catch (error) {
        next(error);
    }
}

export const countPropertyByCity = async (req, res, next) => {

    const cities = req.query.cities.split(",");

    try {
        const list = await Promise.all(
            cities.map(city => {
                return Property.countDocuments({ 
                    "city.name" : city });
            })
        );

        res.status(200).json(list);
    } catch (error) {
        next(error);
    }
}