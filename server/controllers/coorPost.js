import  express  from "express";
import  Mongoose  from "mongoose";

import CoorDatabase  from "../models/postCoor.js";

const router = express.Router();


export const getCoorPosts = async (req,res) =>{
    try {
        const CoorDatabases = await CoorDatabase.find()

        res.status(200).json(CoorDatabases)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getPostsBySearch =  async  (req, res) => {
    const { searchCoorQuery } =  req.query

    try {
        const fullnamecoor = new RegExp(searchCoorQuery, 'i')

        const coorposts = await CoorDatabase.find({$or: [{fullnamecoor}]})
        res.json({ data: coorposts})
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getCoorPost = async (req,res) =>{
    const { id } = req.params

    try {
        const coorpost = await CoorDatabase.findById(id)

        res.status(200).json(coorpost)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }

}

export const createCoorPost = async (req,res) => {
    const coorpost = req.body

    const newCoorDatabase = new CoorDatabase({...coorpost, creator: req.userId,created: new Date().toISOString()})
    try {
        await newCoorDatabase.save()

        res.status(201).json(newCoorDatabase)
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

export const updateCoorPost = async (req,res)=> {
    const { id } = req.params;
    const { fullnamecoor, contactcoor, emailcoor, addresscoor, creator, selectedFIle } = req.body;

    if(!Mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with id: ${id}')

    const updateCoorPost = { fullnamecoor, contactcoor , emailcoor , addresscoor , creator, selectedFIle, _id: id}

    await CoorDatabase.findByIdAndUpdate(id , updateCoorPost, { new: true})

    res.json(updateCoorPost)
}

export const deleteCoorPost = async (req,res) => {
    const { id } = req.params

    if(!Mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

   await CoorDatabase.findByIdAndRemove(id)

   res.json({ message: " Post deleted Successfully"})

}

export default router;