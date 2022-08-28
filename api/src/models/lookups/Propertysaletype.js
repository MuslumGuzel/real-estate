import mongoose from 'mongoose';

const PropertySaleTypeSchema = new mongoose.Schema({

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

export default mongoose.models.PropertySaleType || mongoose.model("PropertySaleType", PropertySaleTypeSchema);