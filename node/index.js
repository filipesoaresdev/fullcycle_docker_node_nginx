const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Wesley')`
connection.query(sql)
connection.end()


app.get('/', (req,res) => {
    const connection = mysql.createConnection(config)
    const sql = `SELECT name from people` 
    connection.query(sql,function (err, result, fields) {
        if (err) throw err;
        res.send('<h1>Full Cycle</h1><div>'+result[0].name+'</div>');
      })
    connection.end()
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})