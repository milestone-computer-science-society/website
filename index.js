'use strict'

const path = require('path')
const fastify = require('fastify')({ logger: { level: process.env.NODE_ENV === 'production' ? false : 'debug'} })

fastify
  .register(require('fastify-static'), {
    root: path.join(__dirname, '/dist')
  })
  .listen(process.env.PORT || 80, '0.0.0.0', err => {
    if (err) throw err
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  })