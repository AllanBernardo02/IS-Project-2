import  mongoose  from "mongoose"; // import mo daw yung module na mongoose sa mongoose na file

const cieSchema = mongoose.Schema({
    schoolidcie: String,
    coursecie: String,
    fullnamecie: String,
    contactcie: String,
    emailcie: String,
    addresscie: String,
    name: String,
    organisationcie: String,
    creator: String,
    schoolyrcie: String,
    selectedFile: String,
    hours: { type: Number, default: 0},
    createdAt: { type: Date, default: new Date()},

})

var CieDatabase = mongoose.model('cieStudents', cieSchema)

export default CieDatabase