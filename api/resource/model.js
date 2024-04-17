// build your `Resource` model here
const db = require('../../data/dbConfig')

function getAllResources() {
  return db('resources')
}

async function addResource(resource) {
  const [id] = await db('resources').insert(resource)
    return getById(id)
}

async function getById(resource_id) {
  const resource = await db('resources').where('resource_id', resource_id).first()
  return resource
}


module.exports = {
  getAllResources,
  addResource
}