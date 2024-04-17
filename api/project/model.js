// build your `Project` model here
const db = require('../../data/dbConfig')

function getAllProjects() {
  return db('projects')
}

async function addProject(project) {
  const [id] = await db('projects').insert(project)
    return getById(id)
}

async function getById(project_id) {
  const project = await db('projects').where('project_id', project_id).first()
  return project
}

module.exports = {
  getAllProjects,
  addProject
}