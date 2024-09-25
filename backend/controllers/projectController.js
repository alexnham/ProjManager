const Project = require('../models/Projects')
const mongoose = require('mongoose')

//get all projects

const getProjects = async (req, res) => {
    const projects = await Project.find({}).sort({createdAt: -1})
    res.status(200).json(projects)
}
const getProject = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(405).json({error: 'No such project'})
    }

    const project = await Project.findById(id)

    if (!project){
        return res.status(405).json({error: 'No such project'})
    }

    res.status(200).json(project)
}

//create new project
const createProject = async (req, res) => {
    const {title, img, description, body,youtube,username} = req.body
    try {
        const project = await Project.create({title,img, description, body, youtube,username})
        res.status(200).json(project)
    } catch (e) {
        res.status(400).json({error: e.message})
    }

}
//delete a project
const deleteProject = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such project'})
    }

    const project = await Project.findOneAndDelete({_id: id})
    if (!project){
        return res.status(404).json({error: 'No such project'})
    }
    res.status(200).json(project)

}

module.exports = {
    getProjects,
    getProject,
    createProject,
    deleteProject
}