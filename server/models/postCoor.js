import mongoose  from "mongoose";

const coorSchema = mongoose.Schema ({
    fullnamecoor:String,
    contactcoor: String,
    emailcoor:   String,
    addresscoor: String,
    name: String,
    creator: String,
    selectedFile: String,

})

var CoorDatabase = mongoose.model('coordinator', coorSchema)

export default CoorDatabase

