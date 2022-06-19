import express from 'express'
import mongoose from 'mongoose'


import CafaDatabase from '../models/postCAFA.js'

const router = express.Router()

export const getCafaPosts = async (req, res) => {
    try {
    
        const cafadatabases = await CafaDatabase.find()

        res.status(200).json(cafadatabases)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getPostsBySearch = async (req, res) => {
    const { searchCafaQuery } = req.query

    try {
        const fullnamecafa = new RegExp(searchCafaQuery, 'i')

        const cafaposts = await CafaDatabase.find({$or: [{fullnamecafa}]})
        res.json({data:cafaposts})
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const getCafaPost = async (req, res) => {
    const { id } = req.params

    try {
        const cafapost = await CafaDatabase.findById(id)

        res.status(200).json(cafapost)
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const createCafaPost = async (req, res) => {
    const cafapost = req.body

    const newCafaDatabase =  new CafaDatabase({ ...cafapost, creator: req.userId, createdAt: new Date().toISOString()})

    try {
        await newCafaDatabase.save()

        res.status(201).json(newCafaDatabase)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateCafaPost = async (req, res) => {
    const { id } = req.params
    const { schoolidcafa, coursecafa, fullnamecafa, contactcafa, emailcafa, addresscafa, schoolyrcafa, organisationcafa, creator, selectedFile } = req.body

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

    const updateCafaPost = { creator, schoolidcafa, coursecafa, fullnamecafa, contactcafa, emailcafa, addresscafa, schoolyrcafa, organisationcafa, selectedFile, _id: id }

    await CafaDatabase.findByIdAndUpdate(id, updateCafaPost, { new: true} )

    res.json(updateCafaPost)
}

export const deleteCafaPost = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

    await CafaDatabase.findByIdAndRemove(id)

    res.json({ message: "Post deleted Successfully"})
}

export const countPost = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

    const cafapost = await CafaDatabase.findById(id)

    const updateCafaPost = await CafaDatabase.findByIdAndUpdate(id, { hours: cafapost.hours + 1}, { new: true})
    res.json(updateCafaPost)
}

export default router 