import mongoose from 'mongoose';

const patientsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    diagonseWith: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true    
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"   
    },
   

}, {timestamps: true});

export const Patient = mongoose.model("Patient", patientsSchema);