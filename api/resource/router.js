// build your `/api/resources` router here
const router = require('express').Router()
const Resources = require('./model')

router.get('/', async (req, res) => {
  try {
    const resources = await Resources.getAllResources()
    res.json(resources)
  } catch(err) {
    res.status(404).json(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const newResource = await Resources.addResource(req.body)
    res.status(201).json(newResource)
  } catch(err) {
    res.status(500).json({
      message: err
    })
  }
})


router.use((err, req, res, next) => { 
  res.status(500).json({
    customMessage: 'Something went wrong in the projects router',
    message: err.message,
    stack: err.stack
  })
})

module.exports = router