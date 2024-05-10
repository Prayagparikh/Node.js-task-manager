const Task = require('../models/Tasks') // coming from mongoose interface

const getAllTasks = async(req, res) => {
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
        // res.status(200).json({status: "success", data: {tasks, nbHits: tasks.length}})
    } catch(error){
        res.status(500).json({msg: error})
    }
}

const createTask = async(req, res) => {
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch(err){
        res.status(500).json({msg: err})
    }
}

const getTask = async(req, res) => {
    try{
        const {id: taskID} = req.params
        const task = await Task.findOne({_id: taskID})
        if(!task){
            return res.status(404).json({message: `No item with id ${taskID}`})
        }
        res.status(200).json({task})
    } catch(err){
        res.status(500).json({message: err})
    }
}


const deleteTask = async(req, res) => {
    try{
        const {id: taskID} = req.params
        const task = await Task.findOneAndDelete({_id: taskID})
        if(!task){
            return res.status(404).json({message: `No item with id ${taskID}`})
        }
        res.status(200).json({task: null, status: 'success'})
    } catch(err){
        res.status(500).json({message: err})
    }
}

const updateTask = async(req, res) => {
    try{
        const {id: taskID} = req.params
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true
        })
        if(!task){
            res.status(404).json({message: `No item with id ${taskID}`})
        }
        res.status(200).json({task})
    } catch(err){
        res.status(500).json({message: err})
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}