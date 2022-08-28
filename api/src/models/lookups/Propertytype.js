import mongoose from 'mongoose';

const PropertyTypeSchema = new mongoose.Schema({

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

export default mongoose.models.PropertyType || mongoose.model("PropertyType", PropertyTypeSchema);