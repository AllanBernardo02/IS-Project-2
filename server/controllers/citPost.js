import express from "express";
import mongoose from "mongoose";

import CitDatabase from "../models/postCIT.js";

const router = express.Router();

export const getCitPosts = async (req, res) =>{
    try {
        const citDatabases = await CitDatabase.find()

        res.status(200).json(citDatabases)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getCitPost = async (req, res) => {
    const { id } = req.params
    
    try {
        const citpost = await CitDatabase.findById(id)

        res.status(200).json(citpost)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const createCitPost = async (req, res) => {
    const citpost = req.body

    const newCitDatabase = new CitDatabase({ ...citpost, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newCitDatabase.save()

        res.status(201).json(newCitDatabase)
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

export const updateCitPost = async (req, res) => {
    const { id } = req.params;
    const { schoolidcit, coursecit, fullnamecit, contactcit, emailcit, addresscit, schoolyrcit, organisationcit, creator, selectedFile} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)
    
    const updateCitPost = { creator, schoolidcit, coursecit, fullnamecit, contactcit, emailcit, addresscit, schoolyrcit, organisationcit, selectedFile, _id: id }

    await CitDatabase.findByIdAndUpdate(id, updateCitPost, { new: true} )
    
    res.json(updateCitPost)
}

export const deleteCitPost = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

    await CitDatabase.findByIdAndRemove(id)

    res.json({ message: "Post deleted Successfully"})

}

export const countPost = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

    const citpost = await CitDatabase.findById(id);

    const updateCitPost = await CitDatabase.findByIdAndUpdate(id, { hours: citpost.hours + 1}, { new: true})
    res.json(updateCitPost)
}

export default router;
