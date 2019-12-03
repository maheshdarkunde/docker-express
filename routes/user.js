const express = require('express')
const db = require('../db')
const utils = require('../utils')
const router = express.Router()
 
router.get('/',(request,response) => {
    const connection = db.connect()
    const statement = 'select * from user'
    connection.query(statement,(error,data) => {
        connection.end()
        response.send(utils.createResult(error,data))
    })
})
router.post('/',(request,response) => {
    const {name,email,phone}= request.body
    const connection = db.connect()
    const statement = `insert into user(name,email,phone) values ( '${name}','${email}','${phone}')`
    connection.query(statement,(error,data) => {
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

module.exports = router