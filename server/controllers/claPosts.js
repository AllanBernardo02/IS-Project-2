import express from "express";
import mongoose from "mongoose";

import ClaDatabase from "../models/postCLA.js";

const router = express.Router();

export const getClaPosts = async (req, res) =>{
    try {
        const claDatabases = await ClaDatabase.find()

        res.status(200).json(claDatabases)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getPostsBySearch = async (req, res) => {
    const { searchClaQuery} = req.query

    try{
        const fullnamecla = new RegExp(searchClaQuery, 'i')

        const claposts = await ClaDatabase.find({$or: [{fullnamecla}]})
        res.json({ data: claposts})
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}
         
export const getClaPost = async (req, res) => {
    const { id } = req.params
    
    try {
        const clapost = await ClaDatabase.findById(id)

        res.status(200).json(clapost)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const createClaPost = async (req, res) => {
    const clapost = req.body

    const newClaDatabase = new ClaDatabase({ ...clapost, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newClaDatabase.save()

        res.status(201).json(newClaDatabase)
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

export const updateClaPost = async (req, res) => {
    const { id } = req.params;
    const { schoolidcla, coursecla, fullnamecla, contactcla, emailcla, addresscla, schoolyrcla, organisationcla, creator, selectedFile} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)
    
    const updateClaPost = { creator, schoolidcla, coursecla, fullnamecla, contactcla, emailcla, addresscla, schoolyrcla, organisationcla, selectedFile, _id: id }

    await ClaDatabase.findByIdAndUpdate(id, updateClaPost, { new: true} )
    
    res.json(updateClaPost)
}

export const deleteClaPost = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

    await ClaDatabase.findByIdAndRemove(id)

    res.json({ message: "Post deleted Successfully"})

}

export const countPost = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

    const clapost = await ClaDatabase.findById(id);

    const updateClaPost = await ClaDatabase.findByIdAndUpdate(id, { hours: clapost.hours + 1}, { new: true})
    res.json(updateClaPost)
}

export default router;
