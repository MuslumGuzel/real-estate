import mongoose from 'mongoose';

const CitySchema = new mongoose.Schema({

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

export default mongoose.models.City || mongoose.model("City", CitySchema);