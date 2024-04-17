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

module.exports = router