// build your `/api/tasks` router here
const router = require('express').Router()
const Tasks = require('./model')

router.get('/', async (req, res) => {
  try {
    const tasks = await Tasks.getAll()

    const modifiedTasks = tasks.map(task => ({
      ...task,
      task_completed: task.task_completed ? true : false
    }))
    res.json(modifiedTasks)
  } catch(err) {
    res.status(404).json(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const task = await Tasks.addTask(req.body)

    const modifiedTask = {
      ...task,
      task_completed: task.task_completed ? true : false
    }

    res.status(201).json(modifiedTask)
  } catch(err) {
    res.status(500).json({
      message: "something went wrong when trying to create a new task"
    })
  }
})

module.exports = router