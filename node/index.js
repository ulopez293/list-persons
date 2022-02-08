
const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')

const path = require('path')

const fs = require('fs');

const app = express()
const port = 3000

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/personas', (req, res) => {
    let fileName = path.join(__dirname, './personas.json');
    delete require.cache[fileName];
    let file = require(fileName);

    res.json(file);
})
app.get('/personas/:id', (req, res) => {
    let fileName = path.join(__dirname, './personas.json');
    delete require.cache[fileName];
    let file = require(fileName);

    let personas = file
    let persona = personas.find(persona => persona.id == req.params.id)
    res.send(persona)
})
app.post('/personas', (req, res) => {
    let fileName = path.join(__dirname, './personas.json');
    delete require.cache[fileName];
    let file = require(fileName);

    let persona = req.body
    let personas = JSON.parse(JSON.stringify(file))
    persona.id = personas.length + 1
    personas.push(persona)
    fs.writeFile(fileName, JSON.stringify(personas), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    res.send(persona)
})
app.put('/personas/:id', (req, res) => {
    let fileName = path.join(__dirname, './personas.json');
    delete require.cache[fileName];
    let file = require(fileName);

    let persona = req.body
    let personas = file
    let index = personas.findIndex(persona => persona.id == req.params.id)
    personas[index] = persona
    fs.writeFile(fileName, JSON.stringify(personas), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    res.send(persona)
})
app.delete('/personas/:id', (req, res) => {
    let fileName = path.join(__dirname, './personas.json');
    delete require.cache[fileName];
    let file = require(fileName);

    let personas = file
    let index = personas.findIndex(persona => persona.id == req.params.id)
    personas.splice(index, 1)
    fs.writeFile(fileName, JSON.stringify(personas), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    res.send(personas)
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

