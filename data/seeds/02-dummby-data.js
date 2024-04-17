const projects = [
  {
    project_name: "Ark Survival Evolved 2",
    project_description: "This game is going to be awesome",
  }
];

const resources = [
  {
    resource_name: 'Wild Card',
    resource_description: 'Video game development company'
  }
]

const tasks = [
  {
    task_description: 'Get the game out on time',
    task_notes: 'Listen to what the community wants',
    project_id: 1
  }
]

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('projects').insert(projects)
  await knex('resources').insert(resources)
  await knex('tasks').insert(tasks)
};
