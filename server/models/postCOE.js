import  mongoose  from "mongoose"; // import mo daw yung module na mongoose sa mongoose na file

const coeSchema = mongoose.Schema({
    schoolidcoe: String,
    coursecoe: String,
    fullnamecoe: String,
    contactcoe: String,
    emailcoe: String,
    addresscoe: String,
    name: String,
    organisationcoe: String,
    creator: String,
    schoolyrcoe: String,
    selectedFile: String,
    hours: { type: Number, default: 0},
    createdAt: { type: Date, default: new Date()},

})

var CoeDatabase = mongoose.model('coeStudents', coeSchema)

export default CoeDatabase

