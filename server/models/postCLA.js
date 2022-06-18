import mongoose from "mongoose";

const claSchema = mongoose.Schema({
    schoolidcla: String,
    coursecla: String,
    fullnamecla: String,
    contactcla: String,
    emailcla: String,
    addresscla: String,
    name: String,
    organisationcla: String,
    creator: String,
    schoolyrcla: String,
    selectedFile: String,
    hours: { type: Number, default: 0},
    createdAt: { type: Date, default: new Date()},

})

var ClaDatabase = mongoose.model('claStudent', claSchema)

export default ClaDatabase