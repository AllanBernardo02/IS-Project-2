import express from 'express'
import mongoose from 'mongoose'

import CoeDatabase from '../models/postCOE.js'

const router = express.Router();

export const getCoePosts = async (req, res) => {
    try {
        const coeDatabases = await CoeDatabase.find()
        
        res.status(200).json(coeDatabases)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getCoePost = async (req, res) => {
    const { id } = req.params

    try {
        const coepost = await CoeDatabase.findById(id)

        res.status(200).json(coepost)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const createCoePost = async (req, res) => {
    const coepost = req.body

    const newCoeDatabase = new CoeDatabase({ ...coepost, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newCoeDatabase.save()

        res.status(201).json(newCoeDatabase)
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

export const updateCoePost = async (req, res) => {
    const { id } = req.params;
    const { schoolidcoe, coursecoe, fullnamecoe, contactcoe, emailcoe, addresscoe, schoolyrcoe, organisationcoe, creator, selectedFile } = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

    const updateCoePost = { creator, schoolidcoe, coursecoe, fullnamecoe, contactcoe, emailcoe, addresscoe, schoolyrcoe, organisationcoe, selectedFile, _id: id }

    await CoeDatabase.findByIdAndUpdate(id, updateCoePost, { new: true })

    res.json(updateCoePost)
}

export const deleteCoePost = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

    await CoeDatabase.findByIdAndRemove(id)

    res.json({ message: "Post deleted Successfully."})

}

export const countPost = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that id: ${id}`)

    const coepost = await CoeDatabase.findById(id);

    const updateCoePost = await CoeDatabase.findByIdAndUpdate(id, { hours: coepost.hours + 1}, { new: true})
    res.json(updateCoePost)
}


export default router
