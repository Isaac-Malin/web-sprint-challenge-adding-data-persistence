// build your `Task` model here
const db = require('../../data/dbConfig')

function getAll() {
  return db('tasks as t')
  .select('p.project_name', 'p.project_description', 't.*')
  .leftJoin('projects as p', 't.project_id', 'p.project_id')
}

async function getById(task_id) {
  const task = await db('tasks').where('task_id', task_id).first()
  return task
}

async function addTask(task) {
  const [id] = await db('tasks').insert(task)
  return getById(id)
}

module.exports = {
  getAll,
  addTask
}
