import mongoose from 'mongoose';

const RoomNumberSchema = new mongoose.Schema({

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

export default mongoose.models.RoomNumber || mongoose.model("RoomNumber", RoomNumberSchema);