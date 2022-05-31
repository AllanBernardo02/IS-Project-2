import mongoose from "mongoose";

const citSchema = mongoose.Schema({
    schoolidcit: String,
    coursecit: String,
    fullnamecit: String,
    contactcit: String,
    emailcit: String,
    addresscit: String,
    name: String,
    organisationcit: String,
    creator: String,
    schoolyrcit: String,
    selectedFile: String,
    hours: { type: Number, default: 0},
    createdAt: { type: Date, default: new Date()},

})

var CitDatabase = mongoose.model('citStudent', citSchema)

export default CitDatabase