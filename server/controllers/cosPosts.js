import express from 'express'
import mongoose from 'mongoose'


import CosDatabase from '../models/postCOS.js'

const router = express.Router()

export const getCosPosts = async (req, res) => {
    try {
        const cosDatabases = await CosDatabase.find()

        res.status(200).json(cosDatabases)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getCosPost = async (req, res) => {
    const { id } = req.params

    try {
        const cospost = await CosDatabase.findById(id)

        res.status(200).json(cospost)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const createCosPost = async (req, res) => {
    const cospost = req.body

    const newCosDatabase =  new CoeDatabase({ ...cospost, creator: req.userId, createdAt: new Date().toISOString()})

    try {
        await newCosDatabase.save()

        res.status(201).json(newCosDatabase)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateCosPost = async (req, res) => {
    const { id } = req.params
    const { schoolidcos, coursecos, fullnamecos, contactcos, emailcos, addresscos, schoolyrcos, organisationcos, creator, selectedFile } = req.body

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

    const updateCosPost = { creator, schoolidcos, coursecos, fullnamecos, contactcos, emailcos, addresscos, schoolyrcos, organisationcos, selectedFile, _id: id }

    await CosDatabase.findByIdAndUpdate(id, updateCosPost, { new: true} )

    res.json(updateCosPost)
} 

export const deleteCosPost = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

    await CosDatabase.findByIdAndRemove(id)

    res.json({ message: "Post deleted Successfully"})
}

export const countPost = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

    const cospost = await CosDatabase.findById(id)

    const updateCosPost = await CosDatabase.findByIdAndUpdate(id, { hours: cospost.hours + 1}, { new: true})
    res.json(updateCosPost)
}

export default router 