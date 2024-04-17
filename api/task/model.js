// build your `Task` model here
const db = require('../../data/dbConfig')

function getAll() {
  return db('tasks as t')
  .select('p.project_name', 'p.project_description', 't.*')
  .leftJoin('projects as p', 't.project_id', 'p.project_id')
}

module.exports = {
  getAll
}
