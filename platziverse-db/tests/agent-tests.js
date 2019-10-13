'use strict'

const test = require('ava')

let db = null
const config = {
  logging: function () {}
}

test.beforeEach(async () => {
  const setupDatabase = require('../')
  db = await setupDatabase(config)
})

test('Agent', t => {
  t.truthy(db.Agent, 'Agent service should exist')
})
