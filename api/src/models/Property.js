import mongoose from 'mongoose';
import { City } from '../types/City.js';
import { County } from '../types/County.js';
import { PropertySaleType } from '../types/PropertySaleType.js';
import { PropertyType } from '../types/PropertyType.js';
import { RoomNumber } from '../types/RoomNumber.js';

const PropertySchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    cityId: {
        type: String,
        require: true,
    },
    city: {
        type: City,
        required: true,
        unique: false,
    },
    countyId: {
        type: String,
        require: true,
    },
    county: {
        type: County,
        required: true,
    },
    propertySaleTypeId: {
        type: String,
        required: true,
    },
    propertySaleType: {
        type: PropertySaleType,
        required: true,
    },
    propertyTypeId: {
        type: String,
        required: true,
    },
    propertyType: {
        type: PropertyType,
        required: true,
    },
    grossDimension: {
        type: Number,
        required: true,
    },
    netDimension: {
        type: Number,
        required: true,
    },
    roomNumberId: {
        type: String,
        required: true,
    },
    roomNumber: {
        type: RoomNumber,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    floorLocation: {
        type: Number,
        required: true,
    },
    floorTotal: {
        type: Number,
        required: true,
    },
    photos:{
        type: [String],        
    },
},
    { timestamps: true }
);

export default mongoose.models.Property || mongoose.model("Property", PropertySchema);