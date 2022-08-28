import mongoose from 'mongoose';
import { City } from '../../types/city.js';

const CountySchema = new mongoose.Schema({

        cityId: {
            type: String,
            required: true,
        },
        city: {
            type: City,
            required: true,
        },
        name: {
            type: String,
            required: true,            
        },
        sortOrder: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.models.County || mongoose.model("County", CountySchema);