
import ContactUs from "../models/ContactUs.js";

export const createContactUs = async (req, res, next) => {

    try {

        const newContactUs = new ContactUs(req.body);

        await newContactUs.save();
        res.status(200).send("Contact Us has been created.");
    } catch (error) {
        next(error);
    }
}

export const udpateContactUs = async (req, res, next) => {

    try {
        const updatedContactUs = await ContactUs
            .findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        
            res.status(200).json(updatedContactUs);
    } catch (error) {
        next(error);
    }
}

export const deleteContactUs = async (req, res, next) => {

    try {
        await ContactUs
            .findByIdAndDelete(req.params.id);
        
            res.status(200).send("Contact Us has been deleted!");
    } catch (error) {
        next(error);
    }
}

export const getContactUs = async (req, res, next) => {

    try {
        const contactUs = await ContactUs
            .findById(req.params.id);
        
            res.status(200).json(contactUs);
    } catch (error) {
        next(error);
    }
}

export const getAllContactUss = async (req, res, next) => {

    try {
        const contactUss = await ContactUs
            .find();
        
            res.status(200).json(contactUss);
    } catch (error) {
        next(error);
    }
}
