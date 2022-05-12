import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    organisationname: String,
    organisationbg: String,
    contactp: String,
    contactn: String,
    organisationadd: String,
    name: String,
    creator: String,
    selectedFile: String,
    hours: { type: Number, default: 0 },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('postmessages', postSchema);

export default PostMessage;