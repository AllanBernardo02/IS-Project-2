import express from "express";
import mongoose from "mongoose";

import CieDatabase from "../models/postCIE.js";

const router = express.Router();

export const getCiePosts = async (req, res) =>{
    try {
        const cieDatabases = await CieDatabase.find()

        res.status(200).json(cieDatabases)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getPostsBySearch = async (req, res) => {
    const { searchCieQuery} = req.query

    try{
        const fullnamecie = new RegExp(searchCieQuery, 'i')

        const cieposts = await CieDatabase.find({$or: [{fullnamecie}]})
        res.json({ data: cieposts})
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getCiePost = async (req, res) => {
    const { id } = req.params
    
    try {
        const ciepost = await CieDatabase.findById(id)

        res.status(200).json(ciepost)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const createCiePost = async (req, res) => {
    const ciepost = req.body

    const newCieDatabase = new CieDatabase({ ...ciepost, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newCieDatabase.save()

        res.status(201).json(newCieDatabase)
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

export const updateCiePost = async (req, res) => {
    const { id } = req.params;
    const { schoolidcie, coursecie, fullnamecie, contactcie, emailcie, addresscie, schoolyrcie, organisationcie, creator, selectedFile} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)
    
    const updateCiePost = { creator, schoolidcie, coursecie, fullnamecie, contactcie, emailcie, addresscie, schoolyrcie, organisationcie, selectedFile, _id: id }

    await CieDatabase.findByIdAndUpdate(id, updateCiePost, { new: true} )
    
    res.json(updateCiePost)
}

export const deleteCiePost = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

    await CieDatabase.findByIdAndRemove(id)

    res.json({ message: "Post deleted Successfully"})

}

export const countPost = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

    const ciepost = await CieDatabase.findById(id);

    const updateCiePost = await CieDatabase.findByIdAndUpdate(id, { hours: ciepost.hours + 1}, { new: true})
    res.json(updateCiePost)
}

export default router;