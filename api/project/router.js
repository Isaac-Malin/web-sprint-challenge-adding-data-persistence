// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', async (req, res) => {
  try {
    const data = await Project.getAllProjects(); // Assuming this returns your data from the DB

    const modifiedData = data.map(item => ({
      ...item,
      project_completed: item.project_completed ? true : false
    }));

    res.json(modifiedData);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newProject = await Project.addProject(req.body);

    const modifiedProject = {
      ...newProject,
      project_completed: newProject.project_completed ? true : false
    };

    res.status(201).json(modifiedProject);
  } catch (err) {
    res.status(500).json({ message: 'There was an error processing your request.' });
  }
});

router.use((err, req, res, next) => { 
  res.status(500).json({
    customMessage: 'Something went wrong in the projects router',
    message: err.message,
    stack: err.stack
  })
})

module.exports = router