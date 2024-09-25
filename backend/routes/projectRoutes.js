const express = require('express')
const Project = require('../models/Projects')
const router = express.Router()
const {createProject, getProject, getProjects, deleteProject} = require('../controllers/projectController')

//RETURN ALL PROJECTS
router.get('/', getProjects)
//RETURN SINGLE
router.get('/:id', getProject)
//POST
router.post('/', createProject)
//DELETE
router.delete('/:id', deleteProject)
//UPDATE
router.patch('/:ID', (req,res) => {
    res.json({
        mssg: "UPDATED"
    })
})
module.exports = router