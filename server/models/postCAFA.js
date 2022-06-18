import mongoose from 'mongoose'

const cafaSchema = mongoose.Schema({
    schoolidcafa: String,
    coursecafa: String,
    fullnamecafa: String,
    contactcafa: String,
    emailcafa: String,
    addresscafa: String,
    organisationcafa: String,
    creator: String,
    schoolyrcafa: String,
    selectedFile: String,
    hours: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

})

var CafaDatabase = mongoose.model('cafaStudents', cafaSchema)

export default CafaDatabase