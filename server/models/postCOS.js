import mongoose from 'mongoose'

const cosSchema = mongoose.Schema({
    schoolidcos: String,
    coursecos: String,
    fullnamecos: String,
    contactcos: String,
    emailcos: String,
    addresscos: String,
    organisationcos: String,
    creator: String,
    schoolyrcos: String,
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

var CosDatabase = mongoose.model('cosStudents', cosSchema)

export default CosDatabase